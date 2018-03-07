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
  transform(recetas: Receta[], searchText: string, isGlutenFree: boolean): Receta[] {

    //si no hay recetas retornar vacio
    if (!recetas) return [];

    let recetasFilterArray: Receta[] = [];

    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      recetas.forEach(it => {
        if (it.isGlutenFree) {
          recetasFilterArray.push(it);
        }
      });
    } else {
      recetasFilterArray = recetas;
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let receta = '';
      return recetasFilterArray.filter(it => {


        receta = it.nombre + it.ingredientes + it.cocinero;
        receta = receta.toLowerCase();

        return receta.includes(searchText);
      });
    }


    //   if (!searchText && isGlutenFree){
    //     recetas.forEach( it =>{
    //       if ( it.isGlutenFree ){
    //         return it;
    //       }
    //     });
    //   } 
    //   searchText = searchText.toLowerCase();
    //   //console.log(`filter isGlutenFree ${isGlutenFree}`);

    //   let receta = '';
    //   return recetas.filter(it => {

    //     if (isGlutenFree) {
    //       if (it.isGlutenFree) {
    //         receta = it.nombre + it.ingredientes + it.cocinero;
    //         receta = receta.toLowerCase();
    //       }
    //     } else {
    //       receta = it.nombre + it.ingredientes + it.cocinero;
    //       receta = receta.toLowerCase();
    //     }
    //     return receta.includes(searchText);
    //   });
    // }

  }
}