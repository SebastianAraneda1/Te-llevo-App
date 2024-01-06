import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarAutoPageRoutingModule } from './eliminar-auto-routing.module';

import { EliminarAutoPage } from './eliminar-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarAutoPageRoutingModule
  ],
  declarations: [EliminarAutoPage]
})
export class EliminarAutoPageModule {}
