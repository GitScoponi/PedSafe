import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {
  Formulario!: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.validacaoFormulario();
  }

  validacaoFormulario() {
    this.Formulario = this._fb.group({
      Usuario: ['', Validators.required]
    })
  }
}
