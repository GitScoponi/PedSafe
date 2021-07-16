import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ERRORS } from '../constant/firebase-errors';

@Injectable({
  providedIn: 'root'
})
export class FgService {

  constructor(private _toast: ToastController) { }

  async AlertaErro(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      color: 'vermelho',
      position: "middle"
    });
    toast.present();
  }
  async AlertaSucesso(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      position: "middle",
      color: 'verdeclaro'
    });
    toast.present();
  }
  async AlertaAviso(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      position: "middle",
      color: 'amarelo'
    });
    toast.present();
  }
  
  fbCath(code: string, msg: string) {
    if (ERRORS[code])
      return this.AlertaErro(ERRORS[code])
    return this.AlertaErro(msg);
  }


}
