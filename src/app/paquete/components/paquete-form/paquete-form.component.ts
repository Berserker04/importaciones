import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';

// servicios
import { PaqueteService } from "../../../core/services/paquete/paquete.service";
import { EmpresaTransportadoraService } from "../../../core/services/empresa-transportadora/empresa-transportadora.service";
import { TipoMercanciaService } from "../../../core/services/tipo-mercancia/tipo-mercancia.service";

// modelos
import { Paquete } from "../../../core/models/paquete.model";
import { EstadoPaquete } from "../../../core/models/estado-paquete.model";
import { EmpresaTransportadora } from "../../../core/models/empresa-transportadora.model";
import { TipoMercancia } from "../../../core/models/tipo-mercancia.model";
import { PaqueteDetalle } from "../../../core/models/paquete-detalle.model";

@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styleUrls: ['./paquete-form.component.css']
})
export class PaqueteFormComponent implements OnInit {

  form: FormGroup;

  paquete: Paquete;
  estadoPaquetes: EstadoPaquete[] = [];
  empresaTransportadoras: EmpresaTransportadora[] = [];
  tipoMercancias: TipoMercancia[] = [];
  paqueteDetallle: PaqueteDetalle;


  id: Number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private paqueteService: PaqueteService,
    private empresaTransportadoraService: EmpresaTransportadoraService,
    private tipoMercanciaService: TipoMercanciaService,
    private toastr: ToastrService
  ) {
    this.paquete = {
      idPaquete: 0,
      codigo: "",
      peso: 0,
      fkNumCasillero: "",
      numGuiaUSA: 0,
      numGuiaCol: 0,
      fkEmpresa: 0,
      fkTipo: 0,
      fkEstado: 0
    };
    this.paqueteDetallle = {
      idPaquete: 0,
      codigo: "",
      peso: 0,
      numCasillero: "",
      nombreCliente: "",
      numGuiaUSA: "",
      numGuiaCol: "",
      empresa: "",
      tipo: "",
      valor: 0,
      estado: ""
    };
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      if (params.id) {
        this.id = params.id;
        await this.paqueteService.getPaqueteById(this.id)
          .subscribe(paquete => {
            this.paquete = paquete;
            this.form = this.buildForm();
          })
        await this.paqueteService.getPaqueteDetalleById(this.id)
          .subscribe(paqueteDetallle => {
            this.paqueteDetallle = paqueteDetallle;
          })
      }
    })
    this.empresaTransportadoraService.getAllEmpresaTransportadoras()
      .subscribe(empresaTransportadoras => {
        this.empresaTransportadoras = empresaTransportadoras;
      })
    this.tipoMercanciaService.getAllTipoMercancias()
      .subscribe(tipoMercancias => {
        this.tipoMercancias = tipoMercancias;
      })
    this.paqueteService.getAllEstados()
      .subscribe(estadoPaquetes => {
        this.estadoPaquetes = estadoPaquetes;
      })
  }

  private buildForm() {
    return this.formBuilder.group({
      idPaquete: [this.paquete.idPaquete, []],
      codigo: [this.paquete.codigo, [Validators.required]],
      peso: [this.paquete.peso, [Validators.required]],
      fkNumCasillero: [this.paquete.fkNumCasillero, [Validators.required]],
      numGuiaUSA: [this.paquete.numGuiaUSA, [Validators.required]],
      numGuiaCol: [this.paquete.numGuiaCol, [Validators.required]],
      fkEmpresa: [this.paquete.fkEmpresa, [Validators.required]],
      fkTipo: [this.paquete.fkTipo, [Validators.required]],
      fkEstado: [this.paquete.fkEstado, [Validators.required]]
    })
  }

  async guardarPaquete() {
    this.refresdata()
    await this.paqueteService.addPaquete(this.paquete)
      .subscribe(paquete => {
        if (paquete) this.toastr.success('Registro exitoso.!', 'Registro!')
        else this.toastr.success('error al registrar.!', 'Registro!')
      })
  }

  async actualizarPaquete() {
    this.refresdata()
    await this.paqueteService.upDatePaquete(this.paquete)
      .subscribe(paquete => {
        if (paquete) this.toastr.success('Actualizacion exitosa.!', 'Actualización!')
        else this.toastr.error('error al actualizar.!', 'Actualización!')
      })
  }

  refresdata() {
    this.paquete = {
      idPaquete: this.getValue("idPaquete"),
      codigo: this.getValue("codigo"),
      peso: this.getValue("peso"),
      fkNumCasillero: this.getValue("fkNumCasillero"),
      numGuiaUSA: this.getValue("numGuiaUSA"),
      numGuiaCol: this.getValue("numGuiaCol"),
      fkEmpresa: this.getValue("fkEmpresa"),
      fkTipo: this.getValue("fkTipo"),
      fkEstado: this.getValue("fkEstado"),
    };
  }

  getValue(name: String) {
    return this.form.controls[`${name}`].value;
  }

}
