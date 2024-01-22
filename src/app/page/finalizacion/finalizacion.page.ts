import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizacion',
  templateUrl: './finalizacion.page.html',
  styleUrls: ['./finalizacion.page.scss'],
})
export class FinalizacionPage implements OnInit {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      type: 'number',
      placeholder: 'Monto',
      min: 1,
      max: 1000000000,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

