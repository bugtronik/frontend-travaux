import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaresListComponent } from './components/gares-list/gares-list.component';
import { GareDetailsComponent } from './components/gare-details/gare-details.component';
import { AddGareComponent } from './components/add-gare/add-gare.component';

const routes: Routes = [
    { path: '', redirectTo: 'gares', pathMatch: 'full' },
    { path: 'gares', component: GaresListComponent },
    { path: 'gares/:id', component: GareDetailsComponent },
    { path: 'addGare', component: AddGareComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}