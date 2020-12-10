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

  addEmpresaTransportadora(empresaTransportadoras: EmpresaTransportadora){
    return this.http.post<EmpresaTransportadora>(`${environment.URL_API}/EmpresaTransportadoras`, empresaTransportadoras);
  }

  getEmpresaTransportadoraById(id: Number) {
    return this.http.get<EmpresaTransportadora>(`${environment.URL_API}/EmpresaTransportadoras/${id}`);
  }

  upDateEmpresaTransportadora(empresaTransportadoras: EmpresaTransportadora){
    return this.http.put<EmpresaTransportadora>(`${environment.URL_API}/EmpresaTransportadoras`, empresaTransportadoras);
  }

  delEmpresaTransportadora(id: Number){
    return this.http.delete<EmpresaTransportadora>(`${environment.URL_API}/EmpresaTransportadoras/${id}`);
  }
}
