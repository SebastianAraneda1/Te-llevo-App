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
    path: 'not-found',
    loadChildren: () => import('./page/home/not-found/not-found.module').then( m => m.NotFoundPageModule)
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
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./page/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
