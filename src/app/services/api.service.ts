import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  urlApi = "https://duoc.grupodevcon.cl/API/v2/";
  token = "100"

  obtenerAsesores(): Observable<any>
  {
    return this.http.get(this.urlApi + "obtenerAsesores/" + this.token).pipe();
  }

  modificarAsesor()
  {

  }

  crearAsesor()
  {

  }

  eliminarAsesor()
  {

  }

}
