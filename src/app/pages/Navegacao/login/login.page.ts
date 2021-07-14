import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menu:MenuController,private _ctrl:NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  logar(){
    this._ctrl.navigateForward(['/calculadoras']);
    this.menu.enable(true);
  }

}
