import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Gestion des gares
import { AddGareComponent } from './components/add-gare/add-gare.component';
import { GareDetailsComponent } from './components/gare-details/gare-details.component';
import { GaresListComponent } from './components/gares-list/gares-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddGareComponent,
    GareDetailsComponent,
    GaresListComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
