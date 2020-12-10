import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { PaqueteDetalle } from "../../models/paquete-detalle.model";
import { Paquete } from "../../models/paquete.model";
import { EstadoPaquete } from "../../models/estado-paquete.model";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPaquetes() {
    return this.http.get<PaqueteDetalle[]>(`${environment.URL_API}/Paquetes`);
  }

  addPaquete(paquete: Paquete) {
    paquete.peso = parseInt(paquete.peso.toString());
    paquete.fkEmpresa = parseInt(paquete.fkEmpresa.toString());
    paquete.fkTipo = parseInt(paquete.fkTipo.toString());
    paquete.numGuiaUSA = parseInt(paquete.numGuiaUSA.toString());
    paquete.numGuiaCol = parseInt(paquete.numGuiaCol.toString());
    return this.http.post<Paquete>(`${environment.URL_API}/Paquetes`, paquete);
  }

  getPaqueteById(id: Number) {
    return this.http.get<Paquete>(`${environment.URL_API}/Paquetes/${id}`);
  }

  getPaqueteDetalleById(id: Number) {
    return this.http.get<PaqueteDetalle>(`${environment.URL_API}/Paquetes/detalle/${id}`);
  }

  upDatePaquete(paquete: Paquete) {
    paquete.fkEmpresa = parseInt(paquete.fkEmpresa.toString());
    paquete.fkTipo = parseInt(paquete.fkTipo.toString());
    paquete.fkEstado = parseInt(paquete.fkEstado.toString());
    return this.http.put<Paquete>(`${environment.URL_API}/Paquetes`, paquete);
  }

  delPaquete(id: Number) {
    return this.http.delete<Paquete>(`${environment.URL_API}/Paquetes/${id}`);
  }

  // estados
  getAllEstados() {
    return this.http.get<EstadoPaquete[]>(`${environment.URL_API}/EstadoPaquetes`);
  }
}
