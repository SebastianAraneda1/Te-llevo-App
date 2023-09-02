import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  urlApi = "Aqui va una api";
  token = "aqui va un token"

  obtener(): Observable<any>
  {
    return this.http.get(this.urlApi + "aqui va un endpoint/" + this.token).pipe();
  }

  modificar()
  {

  }

  crear()
  {

  }

  eliminar()
  {

  }

}
