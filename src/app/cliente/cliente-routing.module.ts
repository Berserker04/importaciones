import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from "./components/cliente/cliente.component";
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
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClienteRoutingModule { }