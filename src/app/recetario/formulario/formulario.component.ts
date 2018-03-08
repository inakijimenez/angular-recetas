import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';


//npm install --save-dev jquery //sin instalar no funciona pq no existe en los modules
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

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
      descripcion: ['', [Validators.required, Validators.minLength(100)]],
      ingredientes: this.fb.array([this.addIngredienteFormGroup()], Validators.required)
    });
  }

  submit(e): void {
    console.log('FormularioComponent onSubmit');    

    //recoger datos del formulario
    let receta : Receta = this.mapearFormulario(this.formulario);
    
    this.recetasService.put(receta);

    //limpiar formulario
    this.crearFormulario();
    
    $('.close').click();

  }

  addIngredienteFormGroup(): FormGroup {

    console.log('addIngrediente');

    return this.fb.group({
      ingrediente: ''
    });
  }

  nuevoIngrediente() {
    //const control = <FormArray>this.formulario.controls['ingredientes'];
    const control = <FormArray>this.formulario.get('ingredientes');
    
    const ingredienteCtrl = this.addIngredienteFormGroup();

    control.push(ingredienteCtrl);

  }

  eliminarIngrediente( i ){    
    const control = <FormArray>this.formulario.get('ingredientes');
    control.removeAt(i);
  }

  mapearFormulario( form ) : Receta {

    let nombre = form.value.nombre;

    let cocinero = form.value.cocinero;
    if (cocinero === '') {
      cocinero = 'Anonimo';
    }

    let img = form.value.imagen;

    let isGlutenFree: boolean = false;
    if (form.value.gluten === '1') {
      isGlutenFree = true;
    }

    let descripcion = form.value.descripcion;


    let ingredientesForm = form.value.ingredientes;
    let ingredientes: string[] = [];

    ingredientesForm.forEach(ing => {
      if (ing.ingrediente != '') {
        ingredientes.push(ing.ingrediente);
      }
    });
    //console.log('ingredientes ' + ingredientes);


    let receta: Receta = new Receta(-1, nombre, img, descripcion, cocinero, 0, isGlutenFree, ingredientes);
    return receta;
  }

  estilosInput( control : FormControl ) : string{

    const CLASS_SUCCESS = "form-group has-success";
    const CLASS_ERROR = "form-group has-error";

    if( control.dirty){
      return (control.valid)? CLASS_SUCCESS : CLASS_ERROR ;
    } else {
      return "form-group";
    }

    
  }
}
