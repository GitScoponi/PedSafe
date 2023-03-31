import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/models/my-error-state-matcher';
import { FgService } from 'src/app/providers/fg.service';
import { ParametrossService } from 'src/app/providers/parametros.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  mostrarResultado: boolean = false;
  tela: number = 1;
  resultadoCalculadora: number = 1;
  Titulo = '';
  Funcao = '';
  Codigo_Calculadora = '';
  dataSource = [];
  resultado: Function;
  resultadoFinal: any = "";

  constructor(
    private _fg: FgService,
    private _ActivatedRoute: ActivatedRoute,
    private _sevice: ParametrossService
  ) {}

  ngOnInit() {
    this._ActivatedRoute.queryParams.subscribe((x) => {
      this.Titulo = x.titulo;
      this.Funcao = x.funcao;
      this.Codigo_Calculadora = x.codigo;
      this._sevice
        .getByCalculadora(this.Codigo_Calculadora)
        .subscribe((data) => {
          this.dataSource = data;
        });
    });
  }
  mudarFuncao(e) {
    this.tela = e.detail.value;
  }
  mudarAdministracao(e) {
    this.resultadoCalculadora = e.detail.value;
  }
  inputChange() {
    this.mostrarResultado = false;
  }
  calcular(f: any) {
    console.log(f);
    if (f.form.status == 'VALID') {
      var calculadora = this.Funcao;
      this.dataSource.forEach((element) => {
        calculadora = calculadora.replace(
          'var' + element.Posicao,
          f.value['var' + element.Posicao]
        );
      });
      var aux = ` return function resultado(){ return ${calculadora};}`;
      this.resultado = new Function(aux)();
      this.resultadoFinal = this.resultado();
      this.mostrarResultado = true;
    } else {
      this._fg.AlertaAviso('Preencha os campos corretamente!');
      this.mostrarResultado = false;
    }
  }
}
