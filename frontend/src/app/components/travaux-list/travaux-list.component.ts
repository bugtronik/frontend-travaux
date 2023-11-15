import { Component, OnInit } from '@angular/core';
import { Travaux } from 'src/app/models/travaux.model';
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

  constructor(private travauxService: TravauxService) { }

  ngOnInit(): void {
	this.retrieveTravaux();
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
}
