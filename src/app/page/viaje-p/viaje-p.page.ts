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
      if(params['final'] && params['partida']){
        this.finalDato = params['final'];
        this.partidaDato = params['partida'];
      }
    })
  }

  ngOnInit() {
  }

  finalDato:string = "";
  partidaDato:string = "";
}
