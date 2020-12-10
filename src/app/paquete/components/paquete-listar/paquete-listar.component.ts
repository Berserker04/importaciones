import { Component, OnInit } from '@angular/core';

import { PaqueteService } from "../../../core/services/paquete/paquete.service";
import { PaqueteDetalle } from "../../../core/models/paquete-detalle.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paquete-listar',
  templateUrl: './paquete-listar.component.html',
  styleUrls: ['./paquete-listar.component.css']
})
export class PaqueteListarComponent implements OnInit {

  paquetes: PaqueteDetalle[] = [];

  constructor(
    private paqueteService: PaqueteService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllPaquetes();
  }

  getAllPaquetes() {
    this.paqueteService.getAllPaquetes()
      .subscribe(paquetes => {
        this.paquetes = paquetes;
      });
  }

  eliminarPaquete(id: Number) {
    this.paqueteService.delPaquete(id)
      .subscribe(paquete => {
        if (paquete) this.toastr.success('Eliminación exitosa.!', 'Eliminar Paquete!')
        else this.toastr.error('error al eliminar.!', 'Eliminar Paquete!')
        this.getAllPaquetes();
      })
  }

}
