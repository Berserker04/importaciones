import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from "./cliente-routing.module";

import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteListarComponent } from './components/cliente-listar/cliente-listar.component';
import { ClienteCrearEditarComponent } from './components/cliente-crear-editar/cliente-crear-editar.component';
import { ClienteDetalleComponent } from './components/cliente-detalle/cliente-detalle.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListarComponent,
    ClienteCrearEditarComponent,
    ClienteDetalleComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClienteModule { }
