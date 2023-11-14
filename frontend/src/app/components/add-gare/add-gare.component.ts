import { Component, OnInit } from '@angular/core';
import { Gare } from 'src/app/models/gare.model';
import { GareService } from 'src/app/services/gare.service';

@Component({
  selector: 'app-add-gare',
  templateUrl: './add-gare.component.html',
  styleUrls: ['./add-gare.component.css']
})
export class AddGareComponent implements OnInit {
	gare: Gare = {
		libelle: ''
	};
	submitted = false;

	constructor(private gareService: GareService) { }

	ngOnInit(): void {
  }

	saveGare(): void {
		const data = {
			libelle: this.gare.libelle
		};

		this.gareService.create(data)
			.subscribe({
				next: (res) => {
					console.log(res);
					this.submitted = true;
				},
				error: (e) => console.error(e)
			})
	}

	newGare(): void {
		this.submitted = false;
		this.gare = {
			libelle: ''
		}
	}
}
