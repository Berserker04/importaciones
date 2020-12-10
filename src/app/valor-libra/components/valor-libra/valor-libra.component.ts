import { Component, OnInit } from '@angular/core';
import { ValorLibraService } from "../../../core/services/valor-libra/valor-libra.service";
import { ValorLibra } from "../../../core/models/valor-libra.model";

@Component({
  selector: 'app-valor-libra',
  templateUrl: './valor-libra.component.html',
  styleUrls: ['./valor-libra.component.css']
})
export class ValorLibraComponent implements OnInit {

  valor: Number = 0;
  newValor: Number = 0;

  valorLibra: ValorLibra[] = [];

  constructor(
    private valorLibraService: ValorLibraService
  ) { }

  ngOnInit(): void {
    this.getValorLibras();
  }

  getValorLibras() {
    this.valorLibraService.getValorLibra()
      .subscribe(valorLibra => {
        this.valorLibra = valorLibra;
        this.valor = valorLibra[0].valor;
        this.newValor = valorLibra[0].valor;
      });
  }

  actualizarValorLibra(){
    const valorNew : ValorLibra = {
      id:1,
      valor: this.newValor
    }
    this.valorLibraService.putValorLibra(valorNew)
      .subscribe(valorLibra => {
        this.valor = valorLibra.valor;
        this.newValor = valorLibra.valor;
      });
  }

}
