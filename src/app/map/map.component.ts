import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [65, 25.482],
      zoom: 12,
    });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 3,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | HAMK Smart',
}).addTo(this.map);
}

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
