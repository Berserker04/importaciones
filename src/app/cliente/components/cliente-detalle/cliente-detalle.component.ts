import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ClienteService } from "../../../core/services/cliente/cliente.service";
import { Cliente } from "../../../core/models/cliente.model";
import { PaqueteDetalle } from "../../../core/models/paquete-detalle.model";

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})

export class ClienteDetalleComponent implements OnInit {

  cliente: Cliente;
  paquetes: PaqueteDetalle[] = [];
  id: Number = 0;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) {
    this.cliente = {
      idCliente: 0,
      numeroCasillero: "",
      nombre: "",
      correo: "",
      direccion: "",
    };

    // this.paquetes = {
    //   idPaquete: 0,
    //   codigo: "",
    //   peso: 0,
    //   numCasillero: "",
    //   nombreCliente: "",
    //   numGuiaUSA: "",
    //   numGuiaCol: "",
    //   empresa: "",
    //   tipo: "",
    //   valor: 0,
    //   estado: ""
    // }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.clienteService.getClienteById(this.id)
          .subscribe(cliente => {
            this.cliente = cliente.cliente;
            this.paquetes = cliente.paquetes;
          })
      }
    })
  }

}
