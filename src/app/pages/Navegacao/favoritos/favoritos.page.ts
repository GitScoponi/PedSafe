import { Component, OnInit } from '@angular/core';
import { Medicamentos } from 'src/app/models/medicamentos.model';
import { AuteticationService } from 'src/app/providers/autetication.service';
import { CalculadorasService } from 'src/app/providers/calculadoras.service';
import { FgService } from 'src/app/providers/fg.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  Medicamentos: any = [];
  Favoritos: any = [];
  favPipe = { Favorito: true };
  favorito: boolean = false;
  constructor(
    private _calculadoras: CalculadorasService,
    private _auth: AuteticationService,
    private _fg: FgService
  ) {}
  ngOnInit() {
    this.atualizar();
  }
 
  atualizar() {
    this._calculadoras.getAll().subscribe(
      (calc) => {
        this.Medicamentos = calc.filter((filter) => filter.Favorito == true);
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
  filtrarFavoritos(medicamento: Medicamentos) {
    return medicamento.Favorito == true;
  }
}
