import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuteticationService } from 'src/app/providers/autetication.service';
import { FgService } from 'src/app/providers/fg.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {
  Formulario!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuteticationService,
    private _fg: FgService,
    private _nav: NavController
  ) {}

  ngOnInit() {
    this.validacaoFormulario();
  }

  validacaoFormulario() {
    this.Formulario = this._fb.group({
      Usuario: ['', Validators.required],
    });
  }
  enviarEmail() {
    if (this.Formulario.valid) {
      this._auth
        .enviarEmailSenha(this.Formulario.value.Usuario)
        .then((x) => {
          this._fg.AlertaConfirmacao(
            'Esqueceu a senha',
            'Foi enviado um e-mail para redefinição de senha',
            () => {
              this._nav.navigateBack(['/login']);
            }
          );
        })
        .catch((e) => {
          this._fg.fbCath(e.code, e.message);
        });
    }
  }
}
