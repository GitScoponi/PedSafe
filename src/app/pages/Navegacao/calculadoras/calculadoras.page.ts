import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Medicamentos } from 'src/app/models/medicamentos.model';
import { CalculadorasService } from 'src/app/providers/calculadoras.service';
import { FavoritosService } from 'src/app/providers/favoritos.service';

@Component({
  selector: 'app-calculadoras',
  templateUrl: './calculadoras.page.html',
  styleUrls: ['./calculadoras.page.scss'],
})
export class CalculadorasPage implements OnInit {

  Medicamentos: any = [];
  favorito: boolean = false
  constructor(private _calculadoras: CalculadorasService, private _favoritos: FavoritosService) {
  }
  ngOnInit() {
    this._calculadoras.getAll().pipe(
      map(x =>
        map(
          (y: any) => new Medicamentos(
            {
              Codigo: y.Codigo,
              Medicamento: y.Medicamento
            }
          )
        )
      )
    ).subscribe(x => {
      this.Medicamentos = x;
    },
      e => {

      })
  }

}
