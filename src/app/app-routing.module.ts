import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionesFormComponent } from './calificaciones/calificaciones-form/calificaciones-form.component';
import { CalificacionesListComponent } from './calificaciones/calificaciones-list/calificaciones-list.component';
import { DomiciliosFormComponent } from './domicilios/domicilios-form/domicilios-form.component';
import { DomiciliosListComponent } from './domicilios/domicilios-list/domicilios-list.component';
import { InventarioFormComponent } from './inventario/inventario-form/inventario-form.component';
import { InventarioListComponent } from './inventario/inventario-list/inventario-list.component';
import { PerfilFormComponent } from './perfil/perfil-form/perfil-form.component';
import { PerfilListComponent } from './perfil/perfil-list/perfil-list.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },

  {
    path: "perfil/list",
    component: PerfilListComponent
  },

  {
    path: "perfil/create",
    component: PerfilFormComponent
  },

  {
    path: "perfil/edit/:id",
    component: PerfilFormComponent
  },


  {
    path: "inventario/list",
    component: InventarioListComponent
  },

  {
    path: "inventario/create",
    component: InventarioFormComponent
  },

  {
    path: "inventario/edit/:id",
    component: InventarioFormComponent
  },

  {
    path: "domicilios/list",
    component: DomiciliosListComponent
  },

  {
    path: "domicilios/create",
    component: DomiciliosFormComponent
  },

  {
    path: "domicilios/edit/:id",
    component: DomiciliosFormComponent
  },

  {
    path: "calificaciones/list",
    component: CalificacionesListComponent
  },

  {
    path: "calificaciones/create",
    component: CalificacionesFormComponent
  },

  {
    path: "calificaciones/edit/:id",
    component: CalificacionesFormComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
