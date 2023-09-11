import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  formViaje = {
    destino: "",
    patente: ""
  }

  cantidad!:number;
  monto!:number;

  showErrorDestino:boolean = false;
  showErrorCantidad:boolean = false;
  showErrorMonto:boolean = false;
  showErrorPatente:boolean = false;

  constructor(private route:Router) { }

  ngOnInit() {
    
  }

  viaje() {
    
    let destinoOK = false;
    let cantidadOK = false;
    let montoOK = false;
    let patenteOK = false;

    const patenteRegex = /^[A-Z]{2,4}\d{2,4}$/;

    if(this.formViaje.destino.length > 3){
      destinoOK = true;
      this.showErrorDestino = false;
    }else{
      this.showErrorDestino = true;
    }
    

    if(this.cantidad > 0){
      cantidadOK = true;
      this.showErrorCantidad = false;
    }else{
      this.showErrorCantidad = true;
    }
    if(this.monto > 0){
      montoOK = true;
      this.showErrorMonto = false;
    }else{
      this.showErrorMonto = true;
    }
    
    if(this.formViaje.patente.match(patenteRegex)){
      patenteOK = true;
      this.showErrorPatente = false;
    }else{
      this.showErrorPatente = true;
    }

    if(destinoOK && cantidadOK && montoOK && patenteOK){

      let datosEnviar:NavigationExtras = {
        queryParams:{
          direccion: this.formViaje.destino,
          cantidad: this.cantidad,
          monto: this.monto,
          patente: this.formViaje.patente
        }
      }

      this.route.navigate(['/viaje'], datosEnviar);

    }

  }

}
