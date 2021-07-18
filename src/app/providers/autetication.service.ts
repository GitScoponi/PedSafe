import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { first } from 'rxjs/operators';
import { ERRORS } from '../constant/firebase-errors';
import { Usuario } from '../models/usuario.model';
import { FgService } from './fg.service';

@Injectable({
  providedIn: 'root',
})
export class AuteticationService {
  constructor(
    private auth: AngularFireAuth,
    private _db: AngularFireDatabase,
    private _fg: FgService,
    private _nav: NavController
  ) {}

  login(Usuario: string, Senha: string) {
    return this.auth.signInWithEmailAndPassword(Usuario, Senha);
  }
  cadastrarNovoUsuario(
    Nome: string,
    Sobrenome: string,
    Email: string,
    Senha: string
  ) {
    return this.auth.createUserWithEmailAndPassword(Email, Senha);
  }
  cadastrarUsuarioNoBanco(
    ID: string,
    Nome: string,
    Sobrenome: string,
    Email: string
  ) {
    return this._db
      .list('Usuarios')
      .push(
        new Usuario({ ID: ID, Nome: Nome, Email: Email, Sobrenome: Sobrenome })
      )
      .catch((x) => {
        console.error(x);
      });
  }

  enviarEmailSenha(Email: string) {
    return this.auth.sendPasswordResetEmail(Email);
  }

  setLocalUser(Usuario: Usuario) {
    localStorage.setItem('User', JSON.stringify(Usuario));
  }
  getUser() {
    var user = localStorage.getItem('User');
    if (user) {
      return JSON.parse(user);
    }
    return this._nav.navigateRoot(['/login']);
  }

  sair() {
    this.auth.signOut();
    localStorage.removeItem('User');
  }
}
