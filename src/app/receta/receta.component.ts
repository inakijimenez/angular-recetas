import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos
  receta: Receta;


  mostrar: boolean;
  glyphicon: string;



  constructor() {
    console.log('RecetaComponent constructor');


    this.receta = new Receta(-1,'Marmitako', 'default', '','',3,false,['']);


    this.receta.addIngrediente('Patatas');
    this.receta.addIngrediente('Bonito');
    this.receta.addIngrediente('Pimiento Verde');
    this.receta.addIngrediente('Pimiento Choricero');
    this.receta.addIngrediente('Aceite');


    this.mostrar = false;
    this.glyphicon = 'glyphicon-chevron-down';


  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLike() {
    this.receta.likes++;
    console.log('click en likes');
  }

  showIngredientes() {
    console.log('Funcion mostrar');
    this.mostrar = !this.mostrar;
    this.glyphicon = (this.mostrar) ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down';
  }
}
