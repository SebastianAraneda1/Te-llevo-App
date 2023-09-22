import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  formViaje = {
    destino: "",
    partida: ""
  }
  showErrorDestino:boolean = false;
  showErrorPartida:boolean = false;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  viaje() {
    
    let destinoOK = false;
    let partidaOk = false;

    if(this.formViaje.destino.length > 3){
      destinoOK = true;
      this.showErrorDestino = false;
    }else{
      this.showErrorDestino = true;
    }
    
    if(this.formViaje.partida.length > 3){
      partidaOk = true;
      this.showErrorPartida = false;
    }else{
      this.showErrorPartida = true;
    }

    if(destinoOK && partidaOk){

      let datosEnviarPasajero:NavigationExtras = {
        queryParams:{
          final: this.formViaje.destino,
          partida: this.formViaje.partida
        }
      }

      this.route.navigate(['/viaje-p'], datosEnviarPasajero);

    }

  }

}
