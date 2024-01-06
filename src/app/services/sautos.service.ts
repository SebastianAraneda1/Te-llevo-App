import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAutos } from '../interfaces/iautos';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IAuto } from '../interfaces/iauto';

@Injectable({
  providedIn: 'root'
})
export class SAutosService {

  constructor(
    private http:HttpClient
  ) { }

  listarAutos():Observable<Array<IAutos>>{
    return this.http.get<Array<IAutos>>(`http://localhost:3000/autos`).pipe(map(response => response));
  }

  agregarAuto(post:IAuto){
    return this.http.post(`http://localhost:3000/autos`, post);
  }

}
