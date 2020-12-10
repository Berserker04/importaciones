import { Component, OnInit } from '@angular/core';
import { EmpresaTransportadoraService } from "../../../core/services/empresa-transportadora/empresa-transportadora.service";
import { EmpresaTransportadora } from "../../../core/models/empresa-transportadora.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresa-transportadora',
  templateUrl: './empresa-transportadora.component.html',
  styleUrls: ['./empresa-transportadora.component.css']
})
export class EmpresaTransportadoraComponent implements OnInit {

  empresasT: EmpresaTransportadora[] = [];

  constructor(
    private empresaTransportadoraService: EmpresaTransportadoraService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllEmpresaTransportadoras();
  }

  getAllEmpresaTransportadoras() {
    this.empresaTransportadoraService.getAllEmpresaTransportadoras()
      .subscribe(empresasT => {
        this.empresasT = empresasT;
      });
  }

  eliminarEmpresaTransportadora(id: Number) {
    this.empresaTransportadoraService.delEmpresaTransportadora(id)
      .subscribe(EmpresaTransportadora => {
        if (EmpresaTransportadora) this.toastr.success('Eliminación exitosa.!', 'Eliminar!')
        else this.toastr.error('error al eliminar.!', 'Eliminar!')
        this.getAllEmpresaTransportadoras();
      })
  }

}
