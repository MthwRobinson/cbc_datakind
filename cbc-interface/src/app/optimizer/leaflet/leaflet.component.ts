import { Component } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';

@Component({
    selector: 'app-leaflet',
    templateUrl: './leaflet.component.html',
    styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent {

  // Define our base layers so we can reference them multiple times
  googleMaps = tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
  });
  googleHybrid = tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
  });

  // Marker for the parking lot at the base of Mt. Ranier trails
  cbc = marker([ 28.445390, -81.329397 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'https://openstationmap.org/0.2.0/client/leaflet/images/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Google Maps': this.googleMaps,
      'Google Hybrid': this.googleHybrid
    },
    overlays: {
       'CBC Central Florida': this.cbc
    }
  };

  options = {
    zoom: 8,
    layers: [ this.googleMaps ],    
    center: latLng([ 28.445390, -81.329397 ])
  };

  }

