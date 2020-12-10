import { Component, OnInit } from '@angular/core';
import { TipoMercanciaService } from "../../../core/services/tipo-mercancia/tipo-mercancia.service";
import { TipoMercancia } from "../../../core/models/tipo-mercancia.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tipo-mercancia',
  templateUrl: './tipo-mercancia.component.html',
  styleUrls: ['./tipo-mercancia.component.css']
})
export class TipoMercanciaComponent implements OnInit {

  tipoMercancias: TipoMercancia[] = [];

  constructor(
    private tipoMercanciaService: TipoMercanciaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllTipoMercancias();
  }

  getAllTipoMercancias() {
    this.tipoMercanciaService.getAllTipoMercancias()
      .subscribe(tipoMercancias => {
        this.tipoMercancias = tipoMercancias;
      });
  }

  eliminarTipoMercancia(id: Number) {
    this.tipoMercanciaService.delTipoMercancia(id)
      .subscribe(tipoMercancia => {
        if (tipoMercancia) this.toastr.success('Eliminación exitosa.!', 'Eliminar!')
        else this.toastr.error('error al eliminar.!', 'Eliminar!')
        this.getAllTipoMercancias();
      })
  }

}
