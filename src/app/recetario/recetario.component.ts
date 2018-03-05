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


  constructor( public recetasService: RecetasService) {

    console.log('Recetariocomponent contructor');
    

   }

  ngOnInit() {
    console.log('Recetario ngOnInit');
    this.recetas = this.recetasService.getAll();
    console.log('recetario recetas %o',this.recetas);
  }

}
