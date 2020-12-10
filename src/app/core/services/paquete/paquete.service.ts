import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Paquete } from "./../../models/paquete.model";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPaquetes() {
    return this.http.get<Paquete[]>(`${environment.URL_API}/Paquetes`);
  }
}
