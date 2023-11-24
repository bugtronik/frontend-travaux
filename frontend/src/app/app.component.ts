import { Component, Input } from '@angular/core';
import { Travaux } from './models/travaux.model';
import { TravauxService } from './services/travaux.service';
import { DatePipe } from '@angular/common';
import { GareService } from './services/gare.service';
import { Gare } from './models/gare.model';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travaux';

  private notifier: NotifierService;

  @Input() viewMode = false;

  @Input() currentTravail: Travaux = {
		demande_debut: '',
		demande_fin: '',
		fin_reel: '',
		heure_debut: '',
		heure_fin: '',
		parcours: '',
		type: '',
		date_creation: '',
		canton: '',
		regime: '',
		etat: '',
		commentaire: '',
		gare: new Gare
  }

  travaux?: any;
  travail_unique?: any;
  currentTravaux: Travaux = {};
  currentIndex = -1;

  dtOptions: DataTables.Settings = {};

  displayStyle = "none";

  gares?: any;
  submitted = false;
  message = '';

  constructor(private travauxService: TravauxService, 
				private datepipe: DatePipe, 
				private gareService: GareService, 
				private route: ActivatedRoute,
				private router: Router,
				notifier: NotifierService) {  
					this.notifier = notifier;
				}

  ngOnInit(): void {
	  this.travaux = this.retrieveTravaux();
	  this.gares = this.gareService.getAll();
	  console.log(this.datepipe.transform((new Date), 'yyyy/MM/dd HH:mm'));
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollX: true,
      processing: true,
      deferRender: true,
      destroy:false
    };

	if(!this.viewMode) {
		this.message = '';
	}
  }

  openPopup(id: string) { 
    this.displayStyle = "block";
	this.getTravaux(id);
  } 
  closePopup() { 
    this.displayStyle = "none";
	
  } 
  
  retrieveTravaux(): void {
	this.travauxService.getAll()
		.subscribe({
			next: (data) => {
				this.travaux = data;
				console.log(data);

			},
			error: (e) => console.error(e)
		});
  }

  refreshList(): void {
	this.retrieveTravaux();
	this.currentTravaux = {};
	this.currentIndex = -1;
  }

  setActiveTravaux(travaux: Travaux, index: number): void {
	this.currentTravaux = travaux;
	this.currentIndex = index;
  }

  getTravaux(id: string): void {
	this.travauxService.get(id)
		.subscribe({
			next: (data) => {
				this.currentTravail = data;
				console.log(data);
			},
			error: (e) => console.error(e)
		});
  }

  updateTravaux(): void {
	this.message = '';

	const data_update = {
		id: this.currentTravail.id,
		demande_debut: this.currentTravail.demande_debut?.replace('T', ' '),
		demande_fin: this.currentTravail.demande_fin?.replace('T', ' '),
		fin_reel: this.currentTravail.fin_reel?.replace('T', ' '),
		heure_debut: this.currentTravail.heure_debut?.replace('T', ' '),
		heure_fin: this.currentTravail.heure_fin?.replace('T', ' '),
		parcours: this.currentTravail.parcours,
		type: this.currentTravail.type,
		date_creation: this.datepipe.transform((new Date), 'yyyy/MM/dd HH:mm'),
		canton: this.currentTravail.canton,
		regime: this.currentTravail.regime,
		etat: this.currentTravail.etat,
		commentaire: this.currentTravail.commentaire,
		gare: this.currentTravail.gare
	}

	this.travauxService.update(this.currentTravail.id, data_update)
		.subscribe({
			next: (res) => {
				console.log(res);
				this.message = res.message ? res.message : 'Données mise à jour';
				this.displayStyle = "none";
			},
			error: (e) => console.error(e)
		});
  	}
}
