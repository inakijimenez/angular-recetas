import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCKS_RECETAS } from './mocks.recetas';

@Injectable()
export class RecetasService {

  constructor() { 
    console.log('RecetasService constructor');
  }

  getAll():Receta[]{

    let recetas: Receta[] = [];
    let receta: Receta;

    let jsonData = JSON.parse(MOCKS_RECETAS.recetas);

    jsonData.forEach(element => {
      
      receta = new Receta (
                           element.id,
                           element.nombre,
                           element.img,
                           element.likes,
                           element.cocinero,
                           element.descrpcion,
                           element.isGlutenFree,
                           element.ingredientes
      );
      recetas.push(receta);
    });
    
    return recetas;
  }

}
