import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { Favoritos } from 'src/app/models/favoritos.model';
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
  dataSource: any = [];
  Favoritos: any = [];
  favorito: boolean = false;
  constructor(
    private _calculadoras: CalculadorasService,
    private _auth: AuteticationService,
    private _fg: FgService,
    private _nav: NavController,
    private _service: CalculadorasService,
    private _favoritoService: FavoritosService
  ) {}
  ngOnInit() {
    this._service.getAll().subscribe((x) => {
      this.dataSource = x;
      console.log(x);
    });
  }

  atualizar() {
    this._calculadoras.getAll().subscribe(
      (calc) => {
        this.dataSource = calc;
      },
      (e) => {
        this._fg.fbCath(e.code, e.message);
      }
    );
  }

  favoritar(obj: any) {
    this._fg.AlertaAviso('foi');
    var usuario = this._auth.getUser();
    this._favoritoService.getByUsuario(usuario.ID).subscribe((x) => {
      var ehFavoritado: any = x.filter(
        (x: any) => x.Codigo_Calculadora == obj.Codigo
      );
      if (ehFavoritado.length > 0) {
        this._fg.AlertaAviso('Calculadora já favoritada!');
      } else {
        this._favoritoService
          .insert(
            new Favoritos({
              Titulo: obj.Titulo,
              Codigo_Calculadora: obj.Codigo,
              Usuario: usuario.ID,
            })
          )
          .then((x) => {
            this._fg.AlertaAviso('Calculadora favoritada!');
          });
      }
    });
    // this._calculadoras.Favoritar(medicamento.Codigo);
  }
  irParaCalculadora(obj: any) {
    this._nav.navigateForward(['/calculadora/'], {
      queryParams: {
        titulo: obj.Titulo,
        funcao: obj.Funcao,
        codigo: obj.Codigo,
      },
    });
  }
}
