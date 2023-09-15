import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizacion',
  templateUrl: './finalizacion.page.html',
  styleUrls: ['./finalizacion.page.scss'],
})
export class FinalizacionPage implements OnInit {
  public alertButtons = ['Pagar'] 

  constructor() { }

  ngOnInit() {
  }

}

