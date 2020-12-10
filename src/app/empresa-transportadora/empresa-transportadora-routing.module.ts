import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaTransportadoraComponent } from "./components/empresa-transportadora/empresa-transportadora.component";
import { EmpresaTransportadoraFormComponent } from "./components/empresa-transportadora-form/empresa-transportadora-form.component";

const routes: Routes = [
  {
    path: "",
    component: EmpresaTransportadoraComponent
  },
  {
    path: "crear",
    component: EmpresaTransportadoraFormComponent
  },
  {
    path: "editar/:id",
    component: EmpresaTransportadoraFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaTransportadoraRoutingModule { }
