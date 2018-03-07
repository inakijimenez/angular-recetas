import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCKS_RECETAS } from './mocks.recetas';

@Injectable()
export class RecetasService {

  recetas: Receta[];

  constructor() {
    console.log('RecetasService constructor');
    this.recetas = [];
    }

  /** 
   * Devuelve la lista de todas las recetas
  */
  getAll(): Receta[] {

    
    let receta;

    let jsonData = JSON.parse(MOCKS_RECETAS);

    jsonData.forEach(element => {

      //console.log('element %o', element);
      receta = new Receta(
        element.id,
        element.nombre,
        element.img,
        element.descripcion,
        element.cocinero,
        element.likes,
        element.isGlutenFree,
        element.ingredientes
      );
      this.recetas.push(receta);
    });

    return this.recetas;
  }

  /**
   * Introduce nuevas recetas
   * @param receta receta a introducir
   */
  put(receta: Receta): void {
    console.log('RecetasService receta %o', receta);
    this.recetas.unshift(receta);

  }

}
