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
    let receta;

    let jsonData = JSON.parse(MOCKS_RECETAS);

    jsonData.forEach(element => {
      
      //console.log('element %o', element);
      receta = new Receta (
                           element.id,
                           element.nombre,
                           element.img,
                           element.descripcion,
                           element.cocinero,  
                           element.likes,                                                    
                           element.isGlutenFree,
                           element.ingredientes
      );
      recetas.push(receta);
    });
    
    return recetas;
  }

}
