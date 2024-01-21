import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IAutos } from 'src/app/interfaces/iautos';
import { SAutosService } from 'src/app/services/sautos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage {

  comunas: string[] = [
    'Alhué',
    'Buin',
    'Calera de Tango',
    'Cerrillos',
    'Cerro Navia',
    'Colina',
    'Conchalí',
    'Curacaví',
    'El Bosque',
    'El Monte',
    'Estación Central',
    'Huechuraba',
    'Independencia',
    'Isla de Maipo',
    'La Cisterna',
    'La Florida',
    'La Granja',
    'La Pintana',
    'La Reina',
    'Lampa',
    'Las Condes',
    'Lo Barnechea',
    'Lo Espejo',
    'Lo Prado',
    'Macul',
    'Maipú',
    'María Pinto',
    'Melipilla',
    'Ñuñoa',
    'Padre Hurtado',
    'Paine',
    'Pedro Aguirre Cerda',
    'Peñaflor',
    'Peñalolén',
    'Pirque',
    'Providencia',
    'Pudahuel',
    'Puente Alto',
    'Quilicura',
    'Quinta Normal',
    'Recoleta',
    'Renca',
    'San Bernardo',
    'San Joaquín',
    'San José de Maipo',
    'San Miguel',
    'San Pedro',
    'San Ramón',
    'Santiago',
    'Talagante',
    'Tiltil',
    'Vitacura'
  ];

  comunaFiltrada: string = "";

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

  filtrarPorComuna() {
    // Si comunaFiltrada tiene un valor, aplica el filtro
    if (this.comunaFiltrada) {
      this.autoService.listarAutos().pipe(
        map(autos => autos.filter(auto => auto.comuna == this.comunaFiltrada))
      ).subscribe(autos => this.Autos = autos);
    }
    // Si comunaFiltrada está vacío, muestra todos los datos
    else {
      this.autoService.listarAutos().subscribe(autos => this.Autos = autos);
    }
  }

}
