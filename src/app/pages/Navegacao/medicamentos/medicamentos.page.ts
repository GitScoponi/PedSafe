import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
  providers: [NavParams],
})
export class MedicamentosPage implements OnInit {
  Medicamento: string = '';
  constructor(private _actRoute: ActivatedRoute) {}

  ngOnInit() {
    this._actRoute.queryParams.subscribe((x) => {
      this.Medicamento = x.medicamento;
    });
  }
}
