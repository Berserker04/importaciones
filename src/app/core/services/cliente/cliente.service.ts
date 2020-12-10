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

  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(`${environment.URL_API}/Clientes`, cliente);
  }

  getAllClientes() {
    return this.http.get<Cliente[]>(`${environment.URL_API}/Clientes`);
  }

  getClienteById(id: Number) {
    return this.http.get<any>(`${environment.URL_API}/Clientes/${id}`);
  }

  upDateCliente(cliente: Cliente){
    return this.http.put<Cliente>(`${environment.URL_API}/Clientes`, cliente);
  }

  delCliente(id: Number){
    return this.http.delete<Cliente>(`${environment.URL_API}/Clientes/${id}`);
  }
}
