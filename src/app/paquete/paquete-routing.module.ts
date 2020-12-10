import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaqueteComponent } from "./components/paquete/paquete.component";

const routes: Routes = [
    {
        path: "",
        component: PaqueteComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PaqueteRoutingModule { }