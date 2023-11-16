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

  travaux?: any;
  currentTravaux: Travaux = {};
  currentIndex = -1;

  dtOptions: DataTables.Settings = {};

  constructor(private travauxService: TravauxService) { }

  ngOnInit(): void {
	  this.travaux = this.retrieveTravaux();
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollX: true,
      processing: true,
      deferRender: true,
      destroy:false
    };
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
