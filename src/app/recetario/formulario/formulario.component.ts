import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';


//npm install --save-dev jquery //sin instalar no funciona pq no existe en los modules
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private recetasService: RecetasService, private fb: FormBuilder) {
    console.log('FormularioComponent constructor');

    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormularioComponent ngOnInit');
  }

  crearFormulario(): void {
    console.log('FormularioComponent crearFormulario');

    this.formulario = this.fb.group({
      //FormControl => [ value , [validaciones] ]
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cocinero: ['', [Validators.minLength(5)]],
      gluten: ['0'],
      imagen: ['/assets/img/receta_default.jpg', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(2)]],
      ingredientes: this.fb.array([this.addIngredient()])
    });
  }

  submit(e): void {
    console.log('FormularioComponent onSubmit');

    //recoger datos del formulario
    let nombre = this.formulario.value.nombre;

    let cocinero = this.formulario.value.cocinero;
    if (cocinero === '') {
      cocinero = 'Anonimo';
    }

    let img = this.formulario.value.imagen;

    let isGlutenFree: boolean = false;
    if (this.formulario.value.gluten === '1') {
      isGlutenFree = true;
    }

    let descripcion = this.formulario.value.descripcion;


    let ingredientesForm = this.formulario.value.ingredientes;
    let ingredientes: string[] = [];

    ingredientesForm.forEach(ing => {
      if (ing.ingrediente != '') {
        ingredientes.push(ing.ingrediente);
      }
    });
    //console.log('ingredientes ' + ingredientes);


    let receta: Receta = new Receta(-1, nombre, img, descripcion, cocinero, 0, isGlutenFree, ingredientes);
    this.recetasService.put(receta);


    $('.close').click();

  }

  addIngredient(): FormGroup {

    console.log('addIngredient');

    return this.fb.group({
      ingrediente: ''
    });
  }

  nuevoIngrediente() {
    const control = <FormArray>this.formulario.controls['ingredientes'];
    const addrCtrl = this.addIngredient();

    control.push(addrCtrl);

    /* subscribe to individual address value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }
}
