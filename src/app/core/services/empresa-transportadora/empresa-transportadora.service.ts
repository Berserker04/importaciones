import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { EmpresaTransportadora } from "./../../models/empresa-transportadora.model";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmpresaTransportadoraService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmpresaTransportadoras() {
    return this.http.get<EmpresaTransportadora[]>(`${environment.URL_API}/EmpresaTransportadoras`);
  }
}
