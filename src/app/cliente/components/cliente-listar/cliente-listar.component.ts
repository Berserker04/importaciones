import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../../core/services/cliente/cliente.service";
import { Cliente } from "../../../core/models/cliente.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes() {
    this.clienteService.getAllClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      });
  }

  eliminarCliente(id: Number) {
    this.clienteService.delCliente(id)
      .subscribe(cliente => {
        if (cliente) this.toastr.success('Eliminación exitosa.!', 'Eliminar Cliente!')
        else this.toastr.error('error al eliminar.!', 'Eliminar Cliente!')
        this.getAllClientes();
      })
  }
}
