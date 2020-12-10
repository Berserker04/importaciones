import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMercanciaRoutingModule } from './tipo-mercancia-routing.module';

import { TipoMercanciaComponent } from './components/tipo-mercancia/tipo-mercancia.component';

@NgModule({
  declarations: [TipoMercanciaComponent],
  imports: [
    CommonModule,
    TipoMercanciaRoutingModule
  ]
})
export class TipoMercanciaModule { }
