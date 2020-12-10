import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteListarComponent } from './components/cliente-listar/cliente-listar.component';

import { ClienteRoutingModule} from "./cliente-routing.module";
import { ClienteCrearEditarComponent } from './components/cliente-crear-editar/cliente-crear-editar.component';

import {SharedModule} from "../shared/shared.module"
import { from } from 'rxjs';

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListarComponent,
    ClienteCrearEditarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClienteModule { }
