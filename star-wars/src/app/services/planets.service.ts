import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { PlanetResponse } from '../models/interfaces/planet-response.interface';

const authURL = 'https://swapi.dev/api/planets/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
    authURL,
    requestOptions
    );
  }
}
