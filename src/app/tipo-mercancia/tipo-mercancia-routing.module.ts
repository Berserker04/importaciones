import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoMercanciaComponent } from './components/tipo-mercancia/tipo-mercancia.component';

const routes: Routes = [
  {
    path: "",
    component: TipoMercanciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoMercanciaRoutingModule { }
