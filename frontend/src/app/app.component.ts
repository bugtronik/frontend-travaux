import { Component, Input } from '@angular/core';
import { Travaux } from './models/travaux.model';
import { TravauxService } from './services/travaux.service';
import { DatePipe } from '@angular/common';
import { GareService } from './services/gare.service';
import { Gare } from './models/gare.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travaux';

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
				private router: Router) { }

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

	this.travauxService.update(this.currentTravail.id, this.currentTravail)
		.subscribe({
			next: (res) => {
				console.log(res);
				this.message = res.message ? res.message : 'Données mise à jour';
			},
			error: (e) => console.error(e)
		});
  	}
}
