import { Component, OnInit } from '@angular/core';
import { CalculadorasService } from 'src/app/providers/calculadoras.service';

@Component({
  selector: 'app-calculadoras',
  templateUrl: './calculadoras.page.html',
  styleUrls: ['./calculadoras.page.scss'],
})
export class CalculadorasPage implements OnInit {

  Medicamentos: any = [];
  constructor(private _calculadoras: CalculadorasService) {
    _calculadoras.getAll().subscribe(x => {
      this.Medicamentos = x;
      console.log(x)
    },
      e => {

      })
  }

  ngOnInit() {

  }

}
