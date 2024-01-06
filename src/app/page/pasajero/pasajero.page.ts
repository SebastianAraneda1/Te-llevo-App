import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IAutos } from 'src/app/interfaces/iautos';
import { SAutosService } from 'src/app/services/sautos.service';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  Autos: Array<IAutos> = new Array<IAutos>();

  ngOnInit():void {
    this.autoService.listarAutos().subscribe((autos)=> (this.Autos = autos));
  }

  constructor(
    private route:Router,
    private autoService:SAutosService,
    
  ) { }

  viaje() {
    this.route.navigate(['/viaje-p']);
  }

}
