import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { TipoMercancia } from "./../../models/tipo-mercancia.model";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TipoMercanciaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTipoMercancias() {
    return this.http.get<TipoMercancia[]>(`${environment.URL_API}/TipoMercancias`);
  }
}
