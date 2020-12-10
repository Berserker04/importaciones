import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';

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
    private toastr: ToastrService
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
      correo: [this.cliente.correo, [Validators.required, Validators.email]],
      direccion: [this.cliente.direccion, [Validators.required]],
    })
  }

  async guardarCliente() {
    if (this.form.valid) {
      this.refresdata()
      await this.clienteService.addCliente(this.cliente)
        .subscribe(cliente => {
          if (cliente) this.toastr.success('Registro exitoso.!', 'Registro')
          else this.toastr.success('error al registrar.!', 'Registro')
        })
    } else {
      this.toastr.success('error al registrar.!', 'Registro')
    }
  }

  async actualizarCliente() {
    if (this.form.valid) {
      this.refresdata()
    await this.clienteService.addCliente(this.cliente)
      .subscribe(cliente => {
        if (cliente) this.toastr.success('Actualizacion exitosa.!', 'Registro Cliente!')
        else this.toastr.error('error al actualizar.!', 'Registro!')
      })
    } else {
      this.toastr.error('error al actualizar.!', 'Registro!')
    }
  }

  refresdata() {
    this.cliente = {
      idCliente: this.getValue("idCliente"),
      numeroCasillero: this.getValue("numeroCasillero"),
      nombre: this.getValue("nombre"),
      correo: this.getValue("correo"),
      direccion: this.getValue("direccion"),
    };
  }

  getValue(name: String) {
    return this.form.controls[`${name}`].value;
  }

}
