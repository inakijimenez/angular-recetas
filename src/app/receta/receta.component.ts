import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos
  nombre: string;
  img: string;
  descripcion: string;
  cocinero : string;
  likes: number;
  isGlutenFree: boolean;
  ingredientes: string[];


  constructor() {
    console.log('RecetaComponent constructor');
    this.nombre = 'Bocata de Calamares';
    this.img = 'http://sevilla.abc.es/gurme//wp-content/uploads/2013/05/bocadillo-calamares-1200x675.jpg';
    this.descripcion = 'Los bocadillos son platos muy sencillos y rápidos de preparar, que nos aportan una fácil solución cuando no tenemos demasiado tiempo para cocinar. Aunque no debemos abusar de ellos y no se debe sustituir siempre una comida completa por un bocadillo, también nos ofrecen la oportunidad de consumir un amplio abanico de nutrientes de un solo bocado. Lo ideal es prepararlos con alimentos frescos, variados y saludables. Para ello, te dejamos una selección de 10 recetas para que prepares suculentos bocadillos rellenos carnes, pescados y verduras.';
    this.cocinero = 'Carlos Arguiñano';
    this.likes = 34;
    this.isGlutenFree = true;
    this.ingredientes = [ 'Calamares', 'Limon', 'Pan', 'Salsa Ali-oli' ];

  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLike() {
    this.likes++;
    console.log('click en likes');
  }
}
