import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';
@Pipe({
  name: 'cochesFilter'
})
export class CochesFilterPipe implements PipeTransform {

    /**
     * 
     * @param coche los elementos en los que se busca    
     *  @param searchText el texto de la busqueda
     * filtro para buscar coches
     * no es key sensitive
     */
  transform(coches: Coche[], searchText: string): Coche[] {

    if(!coches) return [];
    if(!searchText) return coches;
    searchText = searchText.toLowerCase();

    let marcaModelo = '';
    return coches.filter( it => {

        marcaModelo = it.marca + ' ' + it.modelo;
        marcaModelo = marcaModelo.toLowerCase();

        return marcaModelo.includes(searchText);
    });
   }

}