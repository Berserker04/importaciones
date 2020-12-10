import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from "./layout/layout.component";
import { PageNoFoundComponent } from "./page-no-found/page-no-found.component";

import { SideNavComponent } from "./shared/components/side-nav/side-nav.component";

const routes: Routes = [
  // {
  //   path: "",
  //   component: LayoutComponent,
  //   children: [
      {
        path: "",
        component: SideNavComponent,
        children: [
          {
            path: "",
            redirectTo: "/paquete",
            pathMatch: "full",
          },
          {
            path: "paquete",
            loadChildren: () => import("./paquete/paquete.module").then(m => m.PaqueteModule),
          }, {
            path: "cliente",
            loadChildren: () => import("./cliente/cliente.module").then(m => m.ClienteModule),
          }, {
            path: "empresa_transportadora",
            loadChildren: () => import("./empresa-transportadora/empresa-transportadora.module").then(m => m.EmpresaTransportadoraModule),
          }, {
            path: "tipo_mercancia",
            loadChildren: () => import("./tipo-mercancia/tipo-mercancia.module").then(m => m.TipoMercanciaModule),
          }, {
            path: "valor_libra",
            loadChildren: () => import("./valor-libra/valor-libra.module").then(m => m.ValorLibraModule),
          },
        ]
      },
    // ]
  // },
  {
    path: "**",
    component: PageNoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
