import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ValorLibra } from "./../../models/valor-libra.model";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ValorLibraService {

  constructor(
    private http: HttpClient
  ) { }

  getValorLibra() {
    return this.http.get<ValorLibra[]>(`${environment.URL_API}/ValorLibras`);
  }
  putValorLibra(valorLibra : ValorLibra) {
    return this.http.put<ValorLibra>(`${environment.URL_API}/ValorLibras`, valorLibra);
  }
}
