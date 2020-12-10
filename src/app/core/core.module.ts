import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteService } from "./services/cliente/cliente.service";
import { PaqueteService } from "./services/paquete/paquete.service";
import { EmpresaTransportadoraService } from "./services/empresa-transportadora/empresa-transportadora.service";
import { TipoMercanciaService } from "./services/tipo-mercancia/tipo-mercancia.service";
import { ValorLibraService } from "./services/valor-libra/valor-libra.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ClienteService,
    PaqueteService,
    EmpresaTransportadoraService,
    TipoMercanciaService,
    ValorLibraService
  ]
})
export class CoreModule { }
