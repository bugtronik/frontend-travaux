import { Component } from '@angular/core';
import { Travaux } from './models/travaux.model';
import { TravauxService } from './services/travaux.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travaux';

  travaux?: Travaux[];
  currentTravaux: Travaux = {};
  currentIndex = -1

  constructor(private travauxService: TravauxService) { }

  ngOnInit(): void {
	  this.retrieveTravaux();
    console.log(this.travaux)
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
