import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarAutoPage } from './eliminar-auto.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarAutoPageRoutingModule {}
