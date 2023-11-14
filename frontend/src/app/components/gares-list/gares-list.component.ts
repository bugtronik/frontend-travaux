import { Component, OnInit } from '@angular/core';
import { Gare } from 'src/app/models/gare.model';
import { GareService } from 'src/app/services/gare.service';

@Component({
  selector: 'app-gares-list',
  templateUrl: './gares-list.component.html',
  styleUrls: ['./gares-list.component.css']
})
export class GaresListComponent implements OnInit {

	gares?: Gare[];
	currentGare: Gare = {};
	currentIndex = -1;
	libelle = '';

	constructor(private gareService: GareService) { }

	ngOnInit(): void {
		
	}

	retrieveGares(): void {
		this.gareService.getAll()
			.subscribe({
				next: (data) => {
					this.gares = data;
					console.log(data);
				},
				error: (e) => console.error(e)
			});
	}

	refreshList(): void {
		this.retrieveGares();
		this.currentGare = {};
		this.currentIndex = -1;
	}

	setActiveGare(gare: Gare, index: number): void {
		this.currentGare = gare;
		this.currentIndex = index;
	}

	removeAllGares(): void {
		this.gareService.deleteAll()
			.subscribe({
				next: (res) => {
					console.log(res);
					this.refreshList();
				},
				error: (e) => console.error(e)
			})
	}
}
