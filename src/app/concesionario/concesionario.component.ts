import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  coches: Array<Coche>; //array casteado con tipo coche
  cocheActivo: Coche;
  comparador: Coche[];

  constructor() {
    console.log('ConcesionarioComponent constructor');

    this.coches = new Array<Coche>(); //inicializar array
    this.comparador = [];

    this.cocheActivo = new Coche('', '', 0, 0, 0);


    this.coches.push(
      new Coche('Seat', 'Panda', 3, 20, 4.5),
      new Coche('Toyota', 'Verso', 5, 80, 9.8),
      new Coche('Opel', 'Corsa', 3, 60, 6.5, 'v1.6')
    );

  }

  ngOnInit() {

    console.log('ConcesionarioComponent ngOnInit');
  }

  recibirCoche(e) {
    //console.log('coche del evento %o',e.coche);

    this.cocheActivo = e.coche;
    //console.log('coche1 %o', this.coche1);
    //console.log('coche2 %o', this.coche2);
  }

  comparar(coche) {
    //console.log(coche);
    this.cocheActivo = coche;
    if (this.comparador[0] != coche) {
      if (this.comparador.length < 2) {
        this.comparador.unshift(coche);
      } else {
        this.comparador.slice(1, 1);
        this.comparador.unshift(coche);
      }
    }
  }

  compararCocheEvent(e){
    this.cocheActivo = e.coche;
    if (this.comparador[0] != this.cocheActivo) {
      if (this.comparador.length < 2) {
        this.comparador.unshift(this.cocheActivo);
      } else {
        this.comparador.splice(1, 1);
        this.comparador.unshift(this.cocheActivo);
      }
    }
    //console.log(this.comparador);
  }
}
