import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';
@Pipe({
  name: 'recetasFilter'
})
export class RecetasFilterPipe implements PipeTransform {

    /**
     * 
     * @param recetas Array de recetas
     * @param searchText Texto de busqueda
     */
  transform(recetas: Receta[], searchText: string): Receta[] {

    if(!recetas) return [];
    if(!searchText) return recetas;
    searchText = searchText.toLowerCase();

    let receta = '';
    return recetas.filter( it => {

        receta = it.nombre + ' ' + it.ingredientes;
        receta = receta.toLowerCase();

        return receta.includes(searchText);
    });
   }

}