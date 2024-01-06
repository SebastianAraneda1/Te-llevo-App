import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageProtegidaGuard } from './guards/page-protegida.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule),
    canActivate: [PageProtegidaGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
 
  {
    path: 'pasajero',
    loadChildren: () => import('./page/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },

  {
    path: 'conductor',
    loadChildren: () => import('./page/conductor/conductor.module').then( m => m.ConductorPageModule)
  },

  {
    path: 'pasajero',
    loadChildren: () => import('./page/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./page/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 're-password',
    loadChildren: () => import('./page/re-password/re-password.module').then( m => m.RePasswordPageModule)
  },
  {
    path: 'finalizacion',
    loadChildren: () => import('./page/finalizacion/finalizacion.module').then( m => m.FinalizacionPageModule)
  },
  {
    path: 'viaje-p',
    loadChildren: () => import('./page/viaje-p/viaje-p.module').then( m => m.ViajePPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
  {
    path: 'autos',
    loadChildren: () => import('./page/auto/autos/autos.module').then( m => m.AutosPageModule)
  },
  {
    path: 'eliminar-auto',
    loadChildren: () => import('./page/auto/eliminar-auto/eliminar-auto.module').then( m => m.EliminarAutoPageModule)
  },
  {
    path: 'listar-autos',
    loadChildren: () => import('./page/auto/listar-autos/listar-autos.module').then( m => m.ListarAutosPageModule)
  },


  {
    path: 'not-found',
    loadChildren: () => import('./page/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }