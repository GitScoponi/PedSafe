import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadorasPageRoutingModule } from './calculadoras-routing.module';

import { CalculadorasPage } from './calculadoras.page';
import { OrderPipe } from 'src/app/pipes/order.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadorasPageRoutingModule,
    SharedModule,
    
  ],
  declarations: [CalculadorasPage]
})
export class CalculadorasPageModule {}
