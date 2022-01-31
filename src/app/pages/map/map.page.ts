import { Point } from './../../models/point-interface';
import { GreenPointService } from './../../services/green-point.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

const LIGHT_THEME = 'mapbox://styles/watss/ckz1yyxwt000v14rtd740efjm';
const DARK_THEME = 'mapbox://styles/watss/ckz1yz1u2006j14oni46pb096';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: mapboxgl.Map;
  points: Point[];
  loader = true;
  constructor(private greenPointsService: GreenPointService) {}

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
    const mapStyle =
      this.getPreferredColorScheme() === 'dark' ? DARK_THEME : LIGHT_THEME;
    mapboxgl.accessToken = environment.mapBoxToken;
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: mapStyle, // style URL
      center: [-72.10674, -36.60767], // starting position [lng, lat]
      zoom: 12,
      // starting zoom
    });

    /* this.map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      ); */

    this.map.once('load', async () => {
      this.map.resize();
      await this.getPoints();
      this.chargePoints();
    });

    prefersDark.addListener((e) => this.checkToggle('dark'));
    prefersLight.addListener((e) => this.checkToggle('light'));
  }

  checkToggle(theme: string) {
    if (theme === 'light') {
      this.map.setStyle(LIGHT_THEME);
    } else {
      this.map.setStyle(DARK_THEME);
    }
  }

  getPreferredColorScheme() {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  }

  async getPoints() {
    this.loader = true;
    this.points = await this.greenPointsService.getAllPoints();
    this.loader = false;
  }

  chargePoints() {
    this.points.forEach((p) => {
      const ele = document.createElement('div');
      const width = 30;
      const height = 30;
      ele.className = 'marker';
      ele.style.backgroundImage = `url(assets/recycling-point.png)`;
      ele.style.width = `${width}px`;
      ele.style.height = `${height}px`;
      ele.style.backgroundSize = '100%';
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false }).setHTML(`
        <p class="title-point">${p.titulo}</p>
        <p class="subtitle-point">${p.descripcion}</p>
        <a class="text-green-400 underline">Detalles</a>
      `);
      new mapboxgl.Marker(ele)
        .setLngLat([p.longitud, p.latitud])
        .setPopup(popup)
        .addTo(this.map);
    });
  }
}

/* <div class="pt-4">
            <div
            class="text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-green-200 text-green-700 rounded-full"
          >
            Pilas
          </div>
        </div> */

       /*  map.flyTo({
          center: [
          -74.5 + (Math.random() - 0.5) * 10,
          40 + (Math.random() - 0.5) * 10
          ],
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
          }); */
