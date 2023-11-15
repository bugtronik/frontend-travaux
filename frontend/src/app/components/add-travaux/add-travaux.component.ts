import { Component, OnInit } from '@angular/core';
import { Gare } from 'src/app/models/gare.model';
import { Travaux } from 'src/app/models/travaux.model';
import { GareService } from 'src/app/services/gare.service';
import { TravauxService } from 'src/app/services/travaux.service';

@Component({
  selector: 'app-add-travaux',
  templateUrl: './add-travaux.component.html',
  styleUrls: ['./add-travaux.component.css']
})
export class AddTravauxComponent implements OnInit {
	
	travaux: Travaux = {
		demande_debut: new Date(),
		demande_fin: new Date(),
		fin_reel: '',
		heure_debut: new Date(),
		heure_fin: new Date(),
		parcours: '',
		type: '',
		date_creation: new Date(),
		canton: '',
		regime: '',
		etat: '',
		commentaire: '',
		id_gare: ''
	};

	gares?: Gare[];

	submitted = false;
	

	constructor(private travauxService: TravauxService, private gareService: GareService) { }

	ngOnInit(): void {
		
	}

	listeGares(): void {
		this.gareService.getAll()
			.subscribe({
				next: (data) => {
					this.gares = data;
					console.log(data);
				},
				error: (e) => console.error(e)
			});
	}


	saveTravaux(): void {
		const data = {
			demande_debut: this.travaux.demande_debut,
			demande_fin: this.travaux.demande_fin,
			fin_reel: this.travaux.fin_reel,
			heure_debut: this.travaux.heure_debut,
			heure_fin: this.travaux.heure_fin,
			parcours: this.travaux.parcours,
			type: this.travaux.type,
			date_creation: this.travaux.date_creation,
			canton: this.travaux.canton,
			regime: this.travaux.regime,
			etat: this.travaux.etat,
			commentaire: this.travaux.commentaire,
			id_gare: this.travaux.id_gare
		};

		this.travauxService.create(data)
			.subscribe({
				next: (res) => {
					console.log(res);
					this.submitted = true;
				},
				error: (e) => console.error(e)
			})
	}

	newTravaux(): void {
		this.submitted = false;
		this.travaux = {
			demande_debut: new Date(),
			demande_fin: new Date(),
			fin_reel: '',
			heure_debut: new Date(),
			heure_fin: new Date(),
			parcours: '',
			type: '',
			date_creation: new Date(),
			canton: '',
			regime: '',
			etat: '',
			commentaire: '',
			id_gare: ''
		}
	}
}
