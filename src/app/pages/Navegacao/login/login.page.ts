import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { MyErrorStateMatcher } from 'src/app/models/my-error-state-matcher';
import { Usuario } from 'src/app/models/usuario.model';
import { AuteticationService } from 'src/app/providers/autetication.service';
import { FgService } from 'src/app/providers/fg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Formulario!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private menu: MenuController,
    private _ctrl: NavController,
    private _fb: FormBuilder,
    private _auth: AuteticationService,
    private _fg: FgService
  ) {}

  ngOnInit() {
    this.validacaoFormulario();
  }
  validacaoFormulario() {
    this.Formulario = this._fb.group({
      Usuario: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  logar() {
    var form = this.Formulario;
    if (form.valid)
      this._auth.login(form.value.Usuario, form.value.Password).then(
        (x) => {
          if (x.user.emailVerified) {
            this._auth.setLocalUser(new Usuario({ID:x.user.uid}));
            this._ctrl.navigateRoot(['/calculadoras']);
            this.menu.enable(true);
          } else {
            this._fg.AlertaErro('Usuário ou senha incorretos');
          }
        },
        (e) => {
          this._fg.AlertaErro('Usuário ou senha incorretos');
        }
      );
  }
  cadastrarUsuario() {
    this._ctrl.navigateForward(['/cadastro-usuario']);
  }

  sair() {
    this._auth.sair();
  }

  esqueceuSenha() {
    this._ctrl.navigateForward(['/esqueceu-senha']);
  }

  validacao(controls: string) {
    return this.Formulario.controls[controls]?.errors;
  }
}
