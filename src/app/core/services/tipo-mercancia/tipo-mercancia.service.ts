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

  addTipoMercancia(tipoMercancias: TipoMercancia){
    return this.http.post<TipoMercancia>(`${environment.URL_API}/TipoMercancias`, tipoMercancias);
  }

  getTipoMercanciaById(id: Number) {
    return this.http.get<TipoMercancia>(`${environment.URL_API}/TipoMercancias/${id}`);
  }

  upDateTipoMercancia(tipoMercancias: TipoMercancia){
    return this.http.put<TipoMercancia>(`${environment.URL_API}/TipoMercancias`, tipoMercancias);
  }

  delTipoMercancia(id: Number){
    return this.http.delete<TipoMercancia>(`${environment.URL_API}/TipoMercancias/${id}`);
  }
}
