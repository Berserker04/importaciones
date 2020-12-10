import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorLibraComponent } from './components/valor-libra/valor-libra.component';

const routes: Routes = [
  {
    path: "",
    component: ValorLibraComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValorLibraRoutingModule { }
