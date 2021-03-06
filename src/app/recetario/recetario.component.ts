import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
import { RecetasService } from '../providers/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  recetas: Receta[];
  recetaSeleccionada : Receta;

  

  constructor( public recetasService: RecetasService) {

    console.log('Recetariocomponent contructor');
    this.recetas = [];
    
    
  }

  ngOnInit() {
    console.log('Recetario ngOnInit');
    this.recetas = [];
    this.recetas = this.recetasService.getAll();
    //console.log('recetario recetas %o',this.recetas);
    this.recetaSeleccionada = this.recetas[0] || new Receta (-1, '', '', '', '', 0, false, ['']);
  }


  show(receta){

    //console.log('show %s', receta.nombre);
    this.recetaSeleccionada = receta;
    //console.log(this.recetaSeleccionada);
  }

  
}
