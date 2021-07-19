import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-amicacina',
  templateUrl: './amicacina.component.html',
  styleUrls: ['./amicacina.component.scss'],
})
export class AmicacinaComponent implements OnInit {

  constructor(public navParams:NavParams) { 
    console.log(navParams);

  }

  ngOnInit() {}

}
