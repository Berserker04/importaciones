import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ValorLibraRoutingModule } from './valor-libra-routing.module';
import { MaterialModule } from "../material/material.module";
import { ValorLibraComponent } from './components/valor-libra/valor-libra.component';

@NgModule({
  declarations: [
    ValorLibraComponent
  ],
  imports: [
    CommonModule,
    ValorLibraRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ValorLibraModule { }
