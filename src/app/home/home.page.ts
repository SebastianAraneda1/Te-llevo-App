import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Se instancia una variable para almacenar los datos que se traerán desde el login.
  mensaje:string = "";
  
  listaAsesores:any[] = [];

  //Se instancia uno o mas parametros en el constructor para poder usar una libreria con sus funciones
  constructor(private rutaActiva:ActivatedRoute, private storage:Storage, private api:ApiService) {

    //Se usa la libreria ActivatedRoute que esta asignada a rutaActiva para usar la funcion de
    //obtener los parametros de un queryParams de otra URL
    this.rutaActiva.queryParams.subscribe(params =>{

      //Si params contiene parametros los muestra, de no ser asi, no lo hace.
      if(params['nombreUsuario']){
        this.mensaje = params['nombreUsuario'];
      }
    })
  }

  async verStorage(){
    //Para obtener el storage que funciona desde el login solo colocamos el string que le hemos asignado al valor
    let nombre = await this.storage.get("nombre");
    
    console.log("El nombre guardado es: " + nombre);
  }

  mostrarAsesores()
  {
    this.api.obtenerAsesores().subscribe((respuesta)=>{
      console.log(respuesta.result)
      this.listaAsesores = respuesta.result;
    })
  }

}
