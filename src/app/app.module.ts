import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//Modulo para routing
import { AppRouter } from './app.routes';

//Services
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';
import { TodosService } from './providers/todos.service';


//Pipes
import { RoundPipe } from './pipes/round';
import { CochesFilterPipe } from './pipes/cochesFilter';
import { RecetasFilterPipe } from './pipes/recetasFilter';

//Components
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { CocheListaComponent } from './concesionario/coche-lista/coche-lista.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { FormularioCochesComponent } from './concesionario/formulario-coches/formulario-coches.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    CocheListaComponent,
    CochesFilterPipe,
    RoundPipe,
    RecetarioComponent,
    RecetaDetalleComponent,
    RecetasFilterPipe,
    FormularioComponent,
    FormularioCochesComponent,
    PlantillaComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [CochesService, RecetasService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

