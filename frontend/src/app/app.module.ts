import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DatePipe } from '@angular/common';
import { ModalModule } from '@developer-partners/ngx-modal-dialog';

//Gestion des gares
import { AddGareComponent } from './components/add-gare/add-gare.component';
import { GareDetailsComponent } from './components/gare-details/gare-details.component';
import { GaresListComponent } from './components/gares-list/gares-list.component';
import { AddTravauxComponent } from './components/add-travaux/add-travaux.component';
import { TravauxDetailsComponent } from './components/travaux-details/travaux-details.component';
import { TravauxListComponent } from './components/travaux-list/travaux-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddGareComponent,
    GareDetailsComponent,
    GaresListComponent,
    AddTravauxComponent,
    TravauxDetailsComponent,
    TravauxListComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
