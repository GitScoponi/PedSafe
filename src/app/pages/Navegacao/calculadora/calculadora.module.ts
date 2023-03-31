import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraPageRoutingModule } from './calculadora-routing.module';

import { CalculadoraPage } from './calculadora.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTabsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraPageRoutingModule
  ],
  declarations: [CalculadoraPage]
})
export class CalculadoraPageModule {}
