import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaresListComponent } from './components/gares-list/gares-list.component';
import { GareDetailsComponent } from './components/gare-details/gare-details.component';
import { AddGareComponent } from './components/add-gare/add-gare.component';
import { TravauxListComponent } from './components/travaux-list/travaux-list.component';
import { TravauxDetailsComponent } from './components/travaux-details/travaux-details.component';
import { AddTravauxComponent } from './components/add-travaux/add-travaux.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'gares', component: GaresListComponent },
    { path: 'gares/:id', component: GareDetailsComponent },
    { path: 'addGare', component: AddGareComponent },
    { path: 'travaux', component: TravauxListComponent},
    { path: 'travaux/:id', component: TravauxDetailsComponent },
    { path: 'addTravaux', component: AddTravauxComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}