import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// servicios
import { PaqueteService } from "../../../core/services/paquete/paquete.service";

//modelos
import { PaqueteDetalle } from "../../../core/models/paquete-detalle.model";

@Component({
  selector: 'app-paquete-detalle',
  templateUrl: './paquete-detalle.component.html',
  styleUrls: ['./paquete-detalle.component.css']
})
export class PaqueteDetalleComponent implements OnInit {

  paqueteDetallle: PaqueteDetalle;
  id: Number = 0;


  constructor(
    private route: ActivatedRoute,
    private paqueteService: PaqueteService,
  ) {
    this.paqueteDetallle = {
      idPaquete: 0,
      codigo: "",
      peso: 0,
      numCasillero: "",
      nombreCliente: "",
      numGuiaUSA: "",
      numGuiaCol: "",
      empresa: "",
      tipo: "",
      valor: 0,
      estado: ""
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.paqueteService.getPaqueteDetalleById(this.id)
          .subscribe(paqueteDetallle => {
            this.paqueteDetallle = paqueteDetallle;
          })
      }
    })
  }

}
