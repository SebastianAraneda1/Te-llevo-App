import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { IngresadoGuard } from './guards/ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
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
    loadChildren: () => import('./page/pasajero/pasajero.module').then( m => m.PasajeroPageModule),
    canActivate: [NoIngresadoGuard]
  },

  {
    path: 'conductor',
    loadChildren: () => import('./page/conductor/conductor.module').then( m => m.ConductorPageModule),
    canActivate: [NoIngresadoGuard]
  },

  {
    path: 'pasajero',
    loadChildren: () => import('./page/pasajero/pasajero.module').then( m => m.PasajeroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'viaje',
    loadChildren: () => import('./page/viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 're-password',
    loadChildren: () => import('./page/re-password/re-password.module').then( m => m.RePasswordPageModule)
  },
  {
    path: 'finalizacion',
    loadChildren: () => import('./page/finalizacion/finalizacion.module').then( m => m.FinalizacionPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'viaje-p',
    loadChildren: () => import('./page/viaje-p/viaje-p.module').then( m => m.ViajePPageModule),
    canActivate: [NoIngresadoGuard]
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