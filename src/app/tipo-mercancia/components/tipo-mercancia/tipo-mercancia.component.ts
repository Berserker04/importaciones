import { Component, OnInit } from '@angular/core';
import { TipoMercanciaService } from "../../../core/services/tipo-mercancia/tipo-mercancia.service";
import { TipoMercancia } from "../../../core/models/tipo-mercancia.model";

@Component({
  selector: 'app-tipo-mercancia',
  templateUrl: './tipo-mercancia.component.html',
  styleUrls: ['./tipo-mercancia.component.css']
})
export class TipoMercanciaComponent implements OnInit {

  tipoMercancias: TipoMercancia[] = [];

  constructor(
    private tipoMercanciaService: TipoMercanciaService
  ) { }

  ngOnInit(): void {
    this.getAllTipoMercancias();
  }

  getAllTipoMercancias() {
    this.tipoMercanciaService.getAllTipoMercancias()
      .subscribe(tipoMercancias => {
        console.log(tipoMercancias)
        this.tipoMercancias = tipoMercancias;
      });
  }

}
