import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Modulo para routing
import { AppRouter } from './app.routes';

//Services
import { CochesService } from './providers/coches.service';


//Pipes
import { RoundPipe } from './pipes/round';
import { CochesFilterPipe } from './pipes/cochesFilter';

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
import { RecetasService } from './providers/recetas.service';






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
    RecetaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule
  ],
  providers: [CochesService, RecetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

