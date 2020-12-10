import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';

import { EmpresaTransportadoraService } from "../../../core/services/empresa-transportadora/empresa-transportadora.service";
import { EmpresaTransportadora } from "../../../core/models/empresa-transportadora.model";

@Component({
  selector: 'app-empresa-transportadora-form',
  templateUrl: './empresa-transportadora-form.component.html',
  styleUrls: ['./empresa-transportadora-form.component.css']
})
export class EmpresaTransportadoraFormComponent implements OnInit {

  form: FormGroup;

  empresaTransportadora: EmpresaTransportadora;
  id: Number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private empresaTransportadoraService: EmpresaTransportadoraService,
    private toastr: ToastrService
  ) {
    this.empresaTransportadora = {
      id: 0,
      nombre: "",
    };
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.empresaTransportadoraService.getEmpresaTransportadoraById(this.id)
          .subscribe(empresaTransportadora => {
            this.empresaTransportadora = empresaTransportadora;
            this.form = this.buildForm();
          })
      }
    })
  }

  private buildForm() {
    return this.formBuilder.group({
      id: [this.empresaTransportadora.id, []],
      nombre: [this.empresaTransportadora.nombre, [Validators.required]]
    })
  }

  async guardarEmpresaTransportadora() {
    this.refresdata()
    await this.empresaTransportadoraService.addEmpresaTransportadora(this.empresaTransportadora)
      .subscribe(empresaTransportadora => {
        if (empresaTransportadora) this.toastr.success('Registro exitoso.!', 'Toastr fun!')
        else this.toastr.success('error al registrar.!', 'Toastr fun!')
      })
  }

  async actualizarEmpresaTransportadora() {
    this.refresdata()
    await this.empresaTransportadoraService.addEmpresaTransportadora(this.empresaTransportadora)
      .subscribe(empresaTransportadora => {
        if (empresaTransportadora) this.toastr.success('Actualizacion exitosa.!', 'Registro empresaTransportadora!')
        else this.toastr.error('error al actualizar.!', 'Registro empresaTransportadora!')
      })
  }

  refresdata() {
    this.empresaTransportadora = {
      id: this.getValue("id"),
      nombre: this.getValue("nombre")
    };
  }

  getValue(name: String) {
    return this.form.controls[`${name}`].value;
  }

}
