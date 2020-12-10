import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaTransportadoraRoutingModule } from './empresa-transportadora-routing.module';

import { EmpresaTransportadoraComponent } from './components/empresa-transportadora/empresa-transportadora.component';

@NgModule({
  declarations: [
    EmpresaTransportadoraComponent
  ],
  imports: [
    CommonModule,
    EmpresaTransportadoraRoutingModule
  ]
})
export class EmpresaTransportadoraModule { }
