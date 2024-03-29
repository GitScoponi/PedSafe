import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';

import { FavoritosPage } from './favoritos.page';
import { CallbackPipe } from 'src/app/pipes/filter.pipe';
import { OrderPipe } from 'src/app/pipes/order.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    SharedModule,
  ],

  declarations: [FavoritosPage, CallbackPipe],
})
export class FavoritosPageModule {}
