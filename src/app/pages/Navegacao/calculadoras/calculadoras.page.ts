import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { concatMap, map } from 'rxjs/operators';
import { Medicamentos } from 'src/app/models/medicamentos.model';
import { AuteticationService } from 'src/app/providers/autetication.service';
import { CalculadorasService } from 'src/app/providers/calculadoras.service';
import { FavoritosService } from 'src/app/providers/favoritos.service';
import { FgService } from 'src/app/providers/fg.service';

@Component({
  selector: 'app-calculadoras',
  templateUrl: './calculadoras.page.html',
  styleUrls: ['./calculadoras.page.scss'],
})
export class CalculadorasPage implements OnInit {
  Medicamentos: any = [];
  Favoritos: any = [];
  favorito: boolean = false;
  constructor(
    private _calculadoras: CalculadorasService,
    private _favoritos: FavoritosService,
    private _auth: AuteticationService,
    private _fg: FgService
  ) {}
  ngOnInit() {
    this.atualizar();
  }
  atualizar() {
    this._calculadoras.getAll().subscribe(
      (calc) => {
        this.Medicamentos = calc;
        this.atualizarFavoritos();
      },
      (e) => {
        this._fg.fbCath(e.code, e.message);
      }
    );
  }
  atualizarFavoritos() {
    this._favoritos.getAll
      .then((fav) => {
        fav.forEach((elementF) => {
          this.Medicamentos.forEach((elementM) => {
            if (elementF.IDCalculadora == elementM.Codigo) {
              elementM.Favorito = true;
            }
          });
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  favoritar(medicamento: Medicamentos) {
    medicamento.Favorito = !medicamento.Favorito;
    this._favoritos.Favoritar(medicamento.Codigo);
  }
}
