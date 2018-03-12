import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const END_POINT = 'http://localhost:3000/';

@Injectable()
export class CochesService {

  coches: Coche[] = [];

  constructor(private http: HttpClient) {
    console.log('CochesService constructor');
  }

  getCochesRest(): Observable<any> {

    let url = END_POINT + 'coches/';
    return this.http.get(url);
  }

  getAll(): Coche[] {
    console.log('CochesService getAll');

    this.coches = [];

    let coche;

    let jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach(element => {

      coche = new Coche(
        element.marca,
        element.modelo,
        element.version,
        element.foto,
        element.puertas,
        element.caballos,
        element.consumo
      );

      this.coches.push(coche);

    });

    return this.coches;
  }

  postCocheRest(coche: Coche): Observable<any> {

    let url = END_POINT + 'coches/';
    return this.http.post(url, coche);

  }

  put(coche) {
    this.coches.unshift(coche);
  }

  deleteCocheRest(coche: Coche): Observable<any> {

    //console.log('Delete coche %o', coche);
    let url = END_POINT + 'coches/' + coche.id;
    return this.http.delete(url);
  }
}
