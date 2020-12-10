import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';

import { TipoMercanciaService } from "../../../core/services/tipo-mercancia/tipo-mercancia.service";
import { TipoMercancia } from "../../../core/models/tipo-mercancia.model";

@Component({
  selector: 'app-tipo-mercancia-form',
  templateUrl: './tipo-mercancia-form.component.html',
  styleUrls: ['./tipo-mercancia-form.component.css']
})
export class TipoMercanciaFormComponent implements OnInit {

  form: FormGroup;

  tipoMercancia: TipoMercancia;
  id: Number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tipoMercanciaService: TipoMercanciaService,
    private toastr: ToastrService
  ) {
    this.tipoMercancia = {
      id: 0,
      tipo: "",
    };
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.tipoMercanciaService.getTipoMercanciaById(this.id)
          .subscribe(tipoMercancia => {
            this.tipoMercancia = tipoMercancia;
            this.form = this.buildForm();
          })
      }
    })
  }

  private buildForm() {
    return this.formBuilder.group({
      id: [this.tipoMercancia.id, []],
      tipo: [this.tipoMercancia.tipo, [Validators.required, Validators.minLength(5)]]
    })
  }

  async guardarTipoMercancia() {
    if (this.form.valid) {
      this.refresdata()
      await this.tipoMercanciaService.addTipoMercancia(this.tipoMercancia)
        .subscribe(tipoMercancia => {
          if (tipoMercancia) this.toastr.success('Registro exitoso.!', 'Registro!')
          else this.toastr.error('error al registrar.!', 'Registro!')
        })
    } else {
      this.toastr.error('error al registrar.!', 'Registro!')
    }
  }

  async actualizarTipoMercancia() {

    if (this.form.valid) {
      this.refresdata()
      await this.tipoMercanciaService.addTipoMercancia(this.tipoMercancia)
        .subscribe(tipoMercancia => {
          if (tipoMercancia) this.toastr.success('Actualizacion exitosa.!', 'Registro!')
          else this.toastr.error('error al actualizar.!', 'Registro!')
        })
    } else {
      this.toastr.error('error al actualizar.!', 'Registro!')
    }
  }

  refresdata() {
    this.tipoMercancia = {
      id: this.getValue("id"),
      tipo: this.getValue("tipo")
    };
  }

  getValue(name: String) {
    return this.form.controls[`${name}`].value;
  }

}
