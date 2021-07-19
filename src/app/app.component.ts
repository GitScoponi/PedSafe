import { Component, OnInit } from '@angular/core';
import { Medicamentos } from './models/medicamentos.model';
import { Usuario } from './models/usuario.model';
import { AuteticationService } from './providers/autetication.service';
import { CalculadorasService } from './providers/calculadoras.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Medicamentos', url: '/calculadoras', icon: 'medkit' },
    { title: 'Favoritos', url: '/favoritos', icon: 'star' },
    { title: 'Sair', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  user: Usuario;
  constructor(
    private _calc: CalculadorasService,
    private _auth: AuteticationService
  ) {
    this.user = _auth.getUser();
    console.log(this.user);
  }
  ngOnInit(): void {}
}
