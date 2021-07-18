import { Component, OnInit } from '@angular/core';
import { Medicamentos } from './models/medicamentos.model';
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
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private _calc: CalculadorasService) {


  }
  ngOnInit(): void {

  }


}
