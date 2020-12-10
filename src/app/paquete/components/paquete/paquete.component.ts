import { Component, OnInit } from '@angular/core';

import { PaqueteService } from "../../../core/services/paquete/paquete.service";
import { Paquete } from "../../../core/models/paquete.model";

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  paquetes: Paquete[] = [];

  constructor(
    private paqueteService: PaqueteService
  ) { }

  ngOnInit(): void {
    this.getAllPaquetes();
  }

  getAllPaquetes() {
    this.paqueteService.getAllPaquetes()
      .subscribe(paquetes => {
        console.log(paquetes)
        this.paquetes = paquetes;
      });
  }

}
