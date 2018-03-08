import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';


@Injectable()
export class CochesService {

  coches:Coche[] = [];

  constructor() {
    console.log('CochesService constructor');
   }

   getAll():Coche[]{
    console.log('CochesService getAll');
    
    let coche;
    
    let jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach( element => {
      
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

  put (coche){
    this.coches.unshift(coche);
  }
}
