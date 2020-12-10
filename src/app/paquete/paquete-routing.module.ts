import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaqueteListarComponent } from "./components/paquete-listar/paquete-listar.component";
import { PaqueteFormComponent } from "./components/paquete-form/paquete-form.component";
import { PaqueteDetalleComponent } from "./components/paquete-detalle/paquete-detalle.component";

const routes: Routes = [
    {
        path: "",
        component: PaqueteListarComponent
    },
    {
        path: "crear",
        component: PaqueteFormComponent
    },
    {
        path: "editar/:id",
        component: PaqueteFormComponent
    },
    {
        path: "detalle/:id",
        component: PaqueteDetalleComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PaqueteRoutingModule { }