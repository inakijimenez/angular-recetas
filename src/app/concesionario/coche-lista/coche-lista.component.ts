import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-coche-lista',
  templateUrl: './coche-lista.component.html',
  styleUrls: ['./coche-lista.component.scss']
})
export class CocheListaComponent implements OnInit {

  @Input ('coche') coche : Coche;
  @Output () cocheSeleccionado = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  seleccionar(e){
    this.cocheSeleccionado.emit({ coche : this.coche });
    
    console.log(e);


  }
}
