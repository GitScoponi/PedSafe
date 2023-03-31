import { Component, OnInit } from '@angular/core';
import { Medicamentos } from './models/medicamentos.model';
import { Usuario } from './models/usuario.model';
import { AuteticationService } from './providers/autetication.service';
import { CalculadorasService } from './providers/calculadoras.service';
import { FgService } from './providers/fg.service';
import { MenuService } from './providers/menu.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  loadPanel = false;
  user: Usuario;
  constructor(
    private _calc: CalculadorasService,
    private _auth: AuteticationService,
    private _fg: FgService,
    private _menuService: MenuService
  ) {
    this.user = _auth.getUser();
    this._fg.$loadPanel.subscribe((x) => {
      this.loadPanel = x;
    });
  }
  ngOnInit(): void {
    this._menuService.getAll().subscribe((x) => {
      this.appPages = x;
      console.log(x);
    });
  }
  sair(){
    this._auth.sair();
  }
}
