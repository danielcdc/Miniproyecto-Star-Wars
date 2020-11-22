import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlanetsService} from './services/planets.service';
import { PlanetsListadoComponent } from './planets-listado/planets-listado.component'
import { FilmsService } from './services/films.service';
import { FilmListadoComponent } from './film-listado/film-listado.component';

// Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    FilmListadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [PlanetsService,FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
