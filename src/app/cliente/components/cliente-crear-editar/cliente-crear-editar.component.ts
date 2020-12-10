import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClienteService } from "../../../core/services/cliente/cliente.service";
import { Cliente } from "../../../core/models/cliente.model";



@Component({
  selector: 'app-cliente-crear-editar',
  templateUrl: './cliente-crear-editar.component.html',
  styleUrls: ['./cliente-crear-editar.component.css']
})
export class ClienteCrearEditarComponent implements OnInit {

  form: FormGroup;

  cliente: Cliente;
  id: Number = 0;

  constructor(
    private formBuilder: FormBuilder,
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
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.clienteService.getClienteById(this.id)
          .subscribe(cliente => {
            this.cliente = cliente.cliente;
            this.form = this.buildForm();
          })
      }
    })
  }

  private buildForm() {
    return this.formBuilder.group({
      idCliente: [this.cliente.idCliente, []],
      numeroCasillero: [this.cliente.numeroCasillero, [Validators.required]],
      nombre: [this.cliente.nombre, [Validators.required]],
      correo: [this.cliente.correo, [Validators.required]],
      direccion: [this.cliente.direccion, [Validators.required]],
    })
  }

}
