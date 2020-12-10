import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaqueteListarComponent } from "./components/paquete-listar/paquete-listar.component";

import { PaqueteRoutingModule } from "./paquete-routing.module";
import { PaqueteDetalleComponent } from './components/paquete-detalle/paquete-detalle.component';
import { PaqueteFormComponent } from './components/paquete-form/paquete-form.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    PaqueteListarComponent,
    PaqueteDetalleComponent,
    PaqueteFormComponent
  ],
  imports: [
    CommonModule,
    PaqueteRoutingModule,
    SharedModule
  ]
})
export class PaqueteModule { }
