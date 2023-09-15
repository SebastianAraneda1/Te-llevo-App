import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viaje-p',
  templateUrl: './viaje-p.page.html',
  styleUrls: ['./viaje-p.page.scss'],
})
export class ViajePPage implements OnInit {

  constructor(private rutaActiva:ActivatedRoute) { 
    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['direccion'] && params['cantidad'] && params['monto'] && params['patente']){
        this.destinoDato = params['direccion'];
        this.cantidadDato = params['cantidad'];
        this.montoDato = params['monto'];
        this.patenteDato = params['patente']
      }
    })
  }

  ngOnInit() {
  }

  destinoDato:string = "";
  cantidadDato:number = 0;
  montoDato:number= 0;
  patenteDato:string = "";
}
