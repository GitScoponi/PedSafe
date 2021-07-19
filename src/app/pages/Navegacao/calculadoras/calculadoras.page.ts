import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { element } from 'protractor';
import { concatMap, map } from 'rxjs/operators';
import { Favoritos } from 'src/app/models/favoritos.model';
import { Medicamentos } from 'src/app/models/medicamentos.model';
import { AuteticationService } from 'src/app/providers/autetication.service';
import { CalculadorasService } from 'src/app/providers/calculadoras.service';
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
    private _auth: AuteticationService,
    private _fg: FgService,
    private _nav: NavController
  ) {}
  ngOnInit() {
    this.atualizar();
  }

  atualizar() {
    this._calculadoras.getAll().subscribe(
      (calc) => {
        this.Medicamentos = calc;
      },
      (e) => {
        this._fg.fbCath(e.code, e.message);
      }
    );
  }

  favoritar(medicamento: Medicamentos) {
    medicamento.Favorito = !medicamento.Favorito;
    this._calculadoras.Favoritar(medicamento.Codigo);
  }
  irParaCalculadora(calculador: string) {
    this._nav.navigateForward(['/medicamento/' + calculador], {
      queryParams: { 'medicamento': calculador },
    });
  }
}
