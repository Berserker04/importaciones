import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoMercanciaComponent } from './components/tipo-mercancia/tipo-mercancia.component';
import { TipoMercanciaFormComponent } from './components/tipo-mercancia-form/tipo-mercancia-form.component';

const routes: Routes = [
  {
    path: "",
    component: TipoMercanciaComponent
  },
  {
    path: "crear",
    component: TipoMercanciaFormComponent
  },
  {
    path: "editar/:id",
    component: TipoMercanciaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoMercanciaRoutingModule { }
