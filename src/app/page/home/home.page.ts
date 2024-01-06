import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { SUsuariosService } from 'src/app/services/susuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Se instancia una variable para almacenar los datos que se traerán desde el login.
  nombre:string = "";

  //Se instancia uno o mas parametros en el constructor para poder usar una libreria con sus funciones
  constructor(
    private uService:SUsuariosService,
    private route:Router
    ) {}

    ngOnInit(){
      this.nombre = this.uService.usuario.nombre;
    }

    cerrarSesion(){
      this.uService.setLogStatus(false);
      this.route.navigate(['/'])
    }
  

}
