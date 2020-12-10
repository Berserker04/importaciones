import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../../core/services/cliente/cliente.service";
import { Cliente } from "../../../core/models/cliente.model";

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  clientes : Cliente[] = [];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes() {
    this.clienteService.getAllClientes()
      .subscribe(clientes => {
        console.log(clientes)
        this.clientes = clientes;
      });
  }
}
