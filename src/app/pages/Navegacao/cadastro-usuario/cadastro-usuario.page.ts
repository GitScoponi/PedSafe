import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CustomValidators } from 'ng2-validation';
import { MyErrorStateMatcher } from 'src/app/models/my-error-state-matcher';
import { AuteticationService } from 'src/app/providers/autetication.service';
import { FgService } from 'src/app/providers/fg.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  Formulario!: FormGroup;
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  constructor(
    private _fb: FormBuilder,
    private _autenticao: AuteticationService,
    private _fg: FgService,
    private _ctrl: NavController
  ) {}

  ngOnInit() {
    this.validacaoFormulario();
    this.Formulario.reset();
  }

  validacaoFormulario() {
    let Senha = new FormControl('', Validators.required);

    let Senha2 = new FormControl('', [
      Validators.required,
      CustomValidators.equalTo(Senha),
    ]);
    this.Formulario = this._fb.group({
      Nome: ['', Validators.required],
      Sobrenome: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Senha: Senha,
      Senha2: Senha2,
    });
  }
  enviarFormulario() {
    if (this.Formulario.valid) {
      var form = this.Formulario.value;

      this._autenticao.cadastrarNovoUsuario(form.Nome, form.Sobrenome).then(
        (x) => {
          this._autenticao.cadastrarUsuarioNoBanco(
            x.user.uid,
            form.Nome,
            form.Sobrenome,
            form.Email
          );
          x.user.sendEmailVerification();
          // this._fg.AlertaSucesso(
          //   'Para acesso ao Pedsafe é necessario a confirmação do e-mail!'
          // );
          this._fg.AlertaConfirmacao(
            'Confirmação do e-mail',
            'Seu acesso será liberado assim que seu e-mail for confirmado!',
            () => {
              this._ctrl.navigateBack(['/login']);
            }
          );
        },
        (e) => {
          this._fg.fbCath(e.code, e.message);
        }
      );
    }
  }

  validacao(controls: string) {
    return this.Formulario.controls[controls]?.errors;
  }
}
