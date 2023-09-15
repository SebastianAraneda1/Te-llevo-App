import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajePPageRoutingModule } from './viaje-p-routing.module';

import { ViajePPage } from './viaje-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajePPageRoutingModule
  ],
  declarations: [ViajePPage]
})
export class ViajePPageModule {}
