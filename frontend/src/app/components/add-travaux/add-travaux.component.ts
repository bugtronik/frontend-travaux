import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Gare } from 'src/app/models/gare.model';
import { Travaux } from 'src/app/models/travaux.model';
import { GareService } from 'src/app/services/gare.service';
import { TravauxService } from 'src/app/services/travaux.service';

/**
 * @title Basic DateTime Picker
 */
@Component({
  selector: 'app-add-travaux',
  templateUrl: './add-travaux.component.html',
  styleUrls: ['./add-travaux.component.css']
})
export class AddTravauxComponent implements OnInit {
	
	travaux: Travaux = {
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
	};


	gares?: any;

	submitted = false;
	


	constructor(private travauxService: TravauxService, private gareService: GareService, private datepipe: DatePipe) { }

	ngOnInit(): void {
		this.gares = this.gareService.getAll();
	}


	saveTravaux(): void {
		const data = {
			demande_debut: this.travaux.demande_debut?.replace('T', ' '),
			demande_fin: this.travaux.demande_fin?.replace('T', ' '),
			fin_reel: this.travaux.fin_reel?.replace('T', ' '),
			heure_debut: this.travaux.heure_debut?.replace('T', ' '),
			heure_fin: this.travaux.heure_fin?.replace('T', ' '),
			parcours: this.travaux.parcours,
			type: this.travaux.type,
			date_creation: this.datepipe.transform((new Date), 'yyyy/MM/dd HH:mm'),
			canton: this.travaux.canton,
			regime: this.travaux.regime,
			etat: this.travaux.etat,
			commentaire: this.travaux.commentaire,
			gare: this.travaux.gare
		};
		console.log(data);
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
	}
}
