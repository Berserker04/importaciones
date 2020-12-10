import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMercanciaRoutingModule } from './tipo-mercancia-routing.module';

import { TipoMercanciaComponent } from './components/tipo-mercancia/tipo-mercancia.component';
import { TipoMercanciaFormComponent } from './components/tipo-mercancia-form/tipo-mercancia-form.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TipoMercanciaComponent, TipoMercanciaFormComponent],
  imports: [
    CommonModule,
    TipoMercanciaRoutingModule,
    SharedModule
  ]
})
export class TipoMercanciaModule { }
