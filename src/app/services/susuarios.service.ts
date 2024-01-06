import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IUsuarios } from '../interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class SUsuariosService {

  private apiUrl = 'http://localhost:3000/usuarios';

  usuario = new IUsuarios();

  usuarioLog = new BehaviorSubject<boolean>(false);
  logStatus = false;
  
  constructor(
    private http:HttpClient
  ) { }

  getUsuarios(): Observable<Array<IUsuarios>>{
      return this.http.get<Array<IUsuarios>>(this.apiUrl)
      .pipe(map(response => response));
  }

  setLogStatus(status:boolean):void{
      this.logStatus = status;
      this.usuarioLog.next(status);
  }
  
  getLogStatus():Observable<boolean>{
      return this.usuarioLog.asObservable();
  }

  createUser(post:IUsuarios){
      return this.http.post(this.apiUrl, post);
  }


}
