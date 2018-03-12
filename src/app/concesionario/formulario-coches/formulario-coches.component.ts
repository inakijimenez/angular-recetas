import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CochesService } from '../../providers/coches.service';
import { Coche } from '../../model/coche';

import * as $ from 'jquery';



@Component({
  selector: 'app-formulario-coches', 
  templateUrl: './formulario-coches.component.html',
  styleUrls: ['./formulario-coches.component.scss']
})
export class FormularioCochesComponent implements OnInit {

  @Output () cocheCreado = new EventEmitter;

  formularioCoches: FormGroup;

  constructor(private fb: FormBuilder, private cochesService: CochesService) {
    console.log('FormularioCochesComponent constructor');

    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormularioCochesComponent ngOnInit');
  }

  crearFormulario() {

    
    this.formularioCoches = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      version: [''],
      foto: ['/assets/img/coche_default.jpg', Validators.required],
      puertas: ['0'],
      caballos: [100, Validators.required],
      consumo: [7, Validators.required]
    });
  }

  submit(e) {
    let coche: Coche = this.recogerDatos(this.formularioCoches.value);
    //this.cochesService.put(coche);//crea coches temporales
    
    this.cochesService.postCocheRest(coche).//añade coches al db.json
    subscribe(
      data => {
        console.log('Coche creado %o', data);
        this.cocheCreadoEvent(event);//lanza un evento al cocesionario component para que recargue la lista de coches
      }, error => {
        console.log('Error en post %o', error);
      }
    ); 
    
    //limpiar form
    this.crearFormulario();
    $('.close').click();
  }

  recogerDatos(form): Coche {
    let coche: Coche;

    let marca = form.marca;
    let modelo = form.modelo;
    let version = form.version;
    let foto = form.foto;
    let puertasValue = form.puertas;
    let puertas;
    switch (puertasValue) {
      case ('0'): puertas = 3;
        break;
      case ('1'): puertas = 5;
        break;
      case ('2'): puertas = 7;
        break;
    }
    let caballos = form.caballos;
    let consumo = form.consumo;

    coche = new Coche(marca, modelo, version, foto, puertas, caballos, consumo);

    return coche;
  }

  estilosInput(control: FormControl): string {

    const CLASS_SUCCESS = "form-group has-success";
    const CLASS_ERROR = "form-group has-error";

    if (control.dirty) {
      return (control.valid) ? CLASS_SUCCESS : CLASS_ERROR;
    } else {
      return "form-group";
    }
  }

  cocheCreadoEvent(e){
    console.log('formulario cocheCreadoEvent');
    this.cocheCreado.emit(e);
  }
}
