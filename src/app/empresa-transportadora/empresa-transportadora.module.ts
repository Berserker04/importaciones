import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaTransportadoraRoutingModule } from './empresa-transportadora-routing.module';

import { EmpresaTransportadoraComponent } from './components/empresa-transportadora/empresa-transportadora.component';
import { EmpresaTransportadoraFormComponent } from './components/empresa-transportadora-form/empresa-transportadora-form.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    EmpresaTransportadoraComponent,
    EmpresaTransportadoraFormComponent
  ],
  imports: [
    CommonModule,
    EmpresaTransportadoraRoutingModule,
    SharedModule
  ]
})
export class EmpresaTransportadoraModule { }
