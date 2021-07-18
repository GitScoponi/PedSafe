import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';

import { FavoritosPage } from './favoritos.page';
import { CallbackPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FavoritosPageRoutingModule],

  declarations: [FavoritosPage, CallbackPipe],
})
export class FavoritosPageModule {}
