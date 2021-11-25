import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioListComponent } from './inventario/inventario-list/inventario-list.component';
import { InventarioFormComponent } from './inventario/inventario-form/inventario-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { PerfilListComponent } from './perfil/perfil-list/perfil-list.component';
import { PerfilFormComponent } from './perfil/perfil-form/perfil-form.component';
import { DomiciliosListComponent } from './domicilios/domicilios-list/domicilios-list.component';
import { DomiciliosFormComponent } from './domicilios/domicilios-form/domicilios-form.component';
import { CalificacionesListComponent } from './calificaciones/calificaciones-list/calificaciones-list.component';
import { CalificacionesFormComponent } from './calificaciones/calificaciones-form/calificaciones-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InventarioListComponent,
    InventarioFormComponent,
    NavbarComponent,
    HomeComponent,
    PerfilListComponent,
    PerfilFormComponent,
    DomiciliosListComponent,
    DomiciliosFormComponent,
    CalificacionesListComponent,
    CalificacionesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
