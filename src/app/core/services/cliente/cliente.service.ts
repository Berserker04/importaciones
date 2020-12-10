import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Cliente } from "./../../models/cliente.model";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClientes() {
    return this.http.get<Cliente[]>(`${environment.URL_API}/Clientes`);
  }

  getClienteById(id: Number) {
    return this.http.get<any>(`${environment.URL_API}/Clientes/${id}`);
  }
}
