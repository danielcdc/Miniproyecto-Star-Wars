import { Component, OnInit } from '@angular/core';
import { Film } from '../models/interfaces/film.interface';
import { FilmsService } from "../services/films.service"

@Component({
  selector: 'app-film-listado',
  templateUrl: './film-listado.component.html',
  styleUrls: ['./film-listado.component.scss']
})
export class FilmListadoComponent implements OnInit {
  listadoFilms: Film[];
  columnsToDisplay = ['Título','Episodio_id','Opening_Crawl','Director','Productor','Fecha de Lanzamiento','Protagonistas','Planetas','Naves', 'Vehículos', 'Especies','Fecha Creación', 'Fecha edición', 'URL'];

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe(resp => {
    this.listadoFilms = resp.results;
    });
  }
}
