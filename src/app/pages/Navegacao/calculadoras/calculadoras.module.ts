import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadorasPageRoutingModule } from './calculadoras-routing.module';

import { CalculadorasPage } from './calculadoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadorasPageRoutingModule
  ],
  declarations: [CalculadorasPage]
})
export class CalculadorasPageModule {}
