import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input ('cocheParam') coche: Coche; // input (nombre del parametro que viene) nombreVariable : tipodeDato
  @Output () cocheSeleccionado = new EventEmitter(); //los parametros de salido se realizan a traves de eventos

  constructor() { 
    console.log('CocheComponent constructor');
  }

  ngOnInit() {
    console.log('CocheComponent ngOnInit');
  }

  seleccionar(e){
    this.cocheSeleccionado.emit({ coche: this.coche });
    //this.cocheSeleccionado.emit(e);
    //console.log(e);
  }
}
