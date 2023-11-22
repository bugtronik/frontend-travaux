import { Component, OnInit } from '@angular/core';
import { Travaux } from 'src/app/models/travaux.model';
import { GareService } from 'src/app/services/gare.service';
import { TravauxService } from 'src/app/services/travaux.service';

@Component({
  selector: 'app-travaux-list',
  templateUrl: './travaux-list.component.html',
  styleUrls: ['./travaux-list.component.css']
})
export class TravauxListComponent implements OnInit {

  travaux?: Travaux[];
  currentTravaux: Travaux = {};
  currentIndex = -1

  gares?: any;
  submitted = false;
  message = '';

  dtOptions: DataTables.Settings = {};

  displayStyle = "none";

  constructor(private travauxService: TravauxService, private gareService: GareService) { }

  ngOnInit(): void {
	this.retrieveTravaux();
	this.gares = this.gareService.getAll();
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

  removeAllTravaux(): void {
	this.travauxService.deleteAll()
		.subscribe({
			next: (res) => {
				console.log(res);
				this.refreshList();
			},
			error: (e) => console.error(e)
		});
  }
}
