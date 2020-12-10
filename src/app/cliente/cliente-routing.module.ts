import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from "./components/cliente/cliente.component";
import { ClienteDetalleComponent } from "./components/cliente-detalle/cliente-detalle.component";
import { ClienteCrearEditarComponent } from "./components/cliente-crear-editar/cliente-crear-editar.component";

const routes: Routes = [
    {
        path: "",
        component: ClienteComponent
    },
    {
        path: "registrar",
        component: ClienteCrearEditarComponent
    },
    {
        path: "editar/:id",
        component: ClienteCrearEditarComponent
    },
    {
        path: "detalle/:id",
        component: ClienteDetalleComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClienteRoutingModule { }