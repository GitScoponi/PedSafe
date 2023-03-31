import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ERRORS } from '../constant/firebase-errors';

@Injectable({
  providedIn: 'root',
})
export class FgService {
  constructor(
    private _toast: ToastController,
    private _alert: AlertController,
    private _actRoute: ActivatedRoute
  ) {}
  $loadPanel: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ativarLoadPanel() {
    this.$loadPanel.next(true);
  }
  desativarLoadPanel() {
    this.$loadPanel.next(false);
  }

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

  async AlertaConfirmacao(header: string, msg: string, func: () => void) {
    const alert = await this._alert.create({
      cssClass: 'my-custom-class',
      header: header,
      message: msg,
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: func,
        },
      ],
    });
    await alert.present();
  }

  definirCor(): string {
    var cor = 'azul';
    this._actRoute.queryParams.subscribe((x: any) => {
      switch (x.tipo) {
        case '1':
          cor = 'verde';
          break;
        case '2':
          cor = 'amarelo';
          break;
        case '3':
          cor = 'laranja';
          break;
        case '4':
          cor = 'salmao';
          break;
        case '5':
          cor = 'vermelho';
          break;
        case '6':
          cor = 'azulclaro';
          break;
        default:
          cor = 'azul';
          break;
      }
    });
    return cor;
  }
  fbCath(code: string, msg: string) {
    if (ERRORS[code]) return this.AlertaErro(ERRORS[code]);
    return this.AlertaErro(msg);
  }
}
