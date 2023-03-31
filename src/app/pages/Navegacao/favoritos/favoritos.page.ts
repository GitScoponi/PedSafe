import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Medicamentos } from 'src/app/models/medicamentos.model';
import { AuteticationService } from 'src/app/providers/autetication.service';
import { CalculadorasService } from 'src/app/providers/calculadoras.service';
import { FavoritosService } from 'src/app/providers/favoritos.service';
import { FgService } from 'src/app/providers/fg.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  dataSource: any = [];
  Favoritos: any = [];
  favPipe = { Favorito: true };
  favorito: boolean = false;
  constructor(
    private _calculadoras: CalculadorasService,
    private _auth: AuteticationService,
    private _service: FavoritosService,
    private _fg: FgService,
    private _nav: NavController
  ) {}
  ngOnInit() {
    this.atualizar();
  }

  atualizar() {
    var user = this._auth.getUser();
    this._service.getByUsuario(user.ID).subscribe((calc) => {
      this.dataSource = calc;
      console.log('t', calc);
    });
  }
  favoritar(medicamento: Medicamentos) {
    medicamento.Favorito = !medicamento.Favorito;
    // this._calculadoras.Favoritar(medicamento.Codigo);
  }
  filtrarFavoritos(medicamento: Medicamentos) {
    return medicamento.Favorito == true;
  }
  irParaCalculadora(x: any) {
    this._calculadoras.get(x).subscribe((obj: any) => {
      this._nav.navigateForward(['/calculadora/'], {
        queryParams: {
          titulo: obj.Titulo,
          funcao: obj.Funcao,
          codigo: obj.Codigo,
        },
      });
    });
  }
  desfavoritar(x: any) {
    this._service.delete(x).then((x) => {
      this._fg.AlertaAviso('Calculadora desfavoritada!');
    });
  }
}
