import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';
import { CochesService } from '../providers/coches.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  coches: Array<Coche>; //array casteado con tipo coche
  cocheActivo: Coche;
  cocheSecundario: Coche;
  comparador: Coche[];
  searchText: string;

  constructor(public cochesService: CochesService) {
    console.log('ConcesionarioComponent constructor');

    this.coches = new Array<Coche>(); //inicializar array
    

    this.cocheActivo = new Coche('', '', '', '', 0, 0, 0);
    this.cocheSecundario = new Coche('', '', '', '', 0, 0, 0);

    this.comparador = [ this.cocheActivo, this.cocheSecundario ];

    console.log(this.comparador);


    // this.coches.push(
    //   new Coche('Seat', 'Panda', 3, 20, 4.5),
    //   new Coche('Toyota', 'Verso', 5, 80, 9.8),
    //   new Coche('Opel', 'Corsa', 3, 60, 6.5, 'v1.6')
    // );

  }

  ngOnInit() {

    console.log('ConcesionarioComponent ngOnInit');
    this.coches = [];
    //this.coches = this.cochesService.getAll(); //coge coches de mocks coches
    this.getCoches();
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
        if (this.comparador.length == 2) {
          this.cocheSecundario = this.comparador[1];
        }
      } else {
        this.comparador.slice(1, 1);
        this.comparador.unshift(coche);
        this.cocheSecundario = this.comparador[1];
      }
    }
  }

  compararCocheEvent(e) {
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

  //Metodo para conseguir los coches del servicio rest
  getCoches(){
    this.coches = [];
    this.cochesService.getCochesRest().subscribe(
      data => {
        this.mapear(data);
      }, error => {
        console.log('getCoches error %o', error);
      }
    );
  }

  //Introduce los datos del observable en el array
  mapear(data){
    console.log('Mapear coches');
    data.forEach(el => {
      this.coches.push(el);
    });
    console.log('Coches mapeados %a', this.coches);
  }

  cocheCreadoEvent(e){
    console.log('Concesionario cocheCreadoEvent');
    this.coches = [];
    //this.coches = this.cochesService.getAll(); //coge coches de mocks coches
    this.getCoches();
    console.log('Coches evento %a', this.coches);
  }

  deleteCoche(i){
    console.log('ConcesionarioComponent deleteCoche');

    this.cochesService.deleteCocheRest(this.coches[i])
    .subscribe(
      data =>{
        console.log('Deleted %o', data);
        this.getCoches();
      }
    );

  }
}
