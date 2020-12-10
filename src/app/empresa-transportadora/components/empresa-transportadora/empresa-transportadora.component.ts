import { Component, OnInit } from '@angular/core';
import { EmpresaTransportadoraService } from "../../../core/services/empresa-transportadora/empresa-transportadora.service";
import { EmpresaTransportadora } from "../../../core/models/empresa-transportadora.model";


@Component({
  selector: 'app-empresa-transportadora',
  templateUrl: './empresa-transportadora.component.html',
  styleUrls: ['./empresa-transportadora.component.css']
})
export class EmpresaTransportadoraComponent implements OnInit {

  empresasT: EmpresaTransportadora[] = [];

  constructor(
    private empresaTransportadoraService: EmpresaTransportadoraService
  ) { }

  ngOnInit(): void {
    this.getAllEmpresaTransportadoras();
  }

  getAllEmpresaTransportadoras() {
    this.empresaTransportadoraService.getAllEmpresaTransportadoras()
      .subscribe(empresasT => {
        console.log(empresasT)
        this.empresasT = empresasT;
      });
  }

}
