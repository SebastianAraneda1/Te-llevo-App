import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: -33.50002172102929,
        lng: -70.61633899665955,
      },
      title: 'Duoc San Joaquin'
    },
    {
      position: {
        lat: -33.50775829844333,
        lng: -70.61266300402744,
      }, 
      title: 'Metro Pedrero'
    },
    {
      position: {
        lat: -33.50881221907375, 
        lng: -70.58999951207569,
      },
      title: 'Metro Macul'
    },
    {
      position: {
        lat: -33.51298082110334,
        lng:  -70.58966691797484,
      },
      title: 'Granaderos 6431'
    },
  ];

  constructor(private rutaActiva:ActivatedRoute) { 
    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['direccion'] && params['cantidad'] && params['monto'] && params['patente'] && params['comuna']){
        this.destinoDato = params['direccion'];
        this.cantidadDato = params['cantidad'];
        this.montoDato = params['monto'];
        this.patenteDato = params['patente'];
        this.comunaDato = params['comuna'];
      }
    })
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat:-33.50002172102929, lng: -70.61633899665955};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      if (mapEle) {
        mapEle.classList.add('show-map');
      }
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  destinoDato:string = "";
  cantidadDato:number = 0;
  montoDato:number= 0;
  patenteDato:string = "";
  comunaDato:string = "";
}
