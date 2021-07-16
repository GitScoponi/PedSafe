import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ERRORS } from '../constant/firebase-errors';

@Injectable({
  providedIn: 'root',
})
export class FgService {
  constructor(
    private _toast: ToastController,
    private _alert: AlertController
  ) {}

  async AlertaErro(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      color: 'vermelho',
      position: 'middle',
    });
    toast.present();
  }
  async AlertaSucesso(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      position: 'middle',
      color: 'verdeclaro',
    });
    toast.present();
  }
  async AlertaAviso(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      position: 'middle',
      color: 'amarelo',
    });
    toast.present();
  }

  async AlertaConfirmacao(header:string,msg:string,func:()=>void) {
    const alert = await this._alert.create({
      cssClass: 'my-custom-class',
      header: header,
      message: msg,
      backdropDismiss:false,
      buttons: [
        {
          text: 'OK',
          handler: func
        },
      ],
    });
    await alert.present();
  }
  fbCath(code: string, msg: string) {
    if (ERRORS[code]) return this.AlertaErro(ERRORS[code]);
    return this.AlertaErro(msg);
  }
}
