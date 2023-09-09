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
    cantidad: "",
    monto: 0,
    patente: ""
  }

  showErrorDestino:boolean = false;
  showErrorCantidad:boolean = false;
  showErrorMonto:boolean = false;
  showErrorPatente:boolean = false;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  viaje() {
    let destino = false;
    let cantidad = false;
    let monto = false;
    let patente = false;

    const patenteRegexActual = /^[A-Z]{4}\d{2}$/;
    const patenteRefexAnterior = /^[A-Z]{2}\d{4}$/ 

    if(this.formViaje.destino.length > 3){
      destino = true;
    }else{
      destino = false;
    }
  }

}
