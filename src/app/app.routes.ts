import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';

//rutas de la app
const APP_ROUTES: Routes = [
    { path: 'receta', component: RecetaComponent },
    { path: 'propiedades', component: PropiedadesComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: Page404Component }
    
];

export const AppRouter = RouterModule.forRoot(APP_ROUTES);
