import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SUsuariosService } from '../services/susuarios.service';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(
    public router: Router,
    private userService: SUsuariosService
){}


canActivate(): boolean {
  if (!this.userService.logStatus) {
      this.router.navigate(['login']);
      return false;
  }
  return true;
}
  
}
