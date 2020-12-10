import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaqueteComponent } from "./components/paquete/paquete.component";

import { PaqueteRoutingModule } from "./paquete-routing.module";

@NgModule({
  declarations: [
    PaqueteComponent
  ],
  imports: [
    CommonModule,
    PaqueteRoutingModule
  ]
})
export class PaqueteModule { }
