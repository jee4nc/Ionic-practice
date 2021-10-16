import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listWeather: any;
  constructor(private weatherService: WeatherService) {
    this.obtenerWeather();
  }

  obtenerWeather() {
    this.weatherService.getWeather()
    .then(respuesta => {
      console.log(respuesta);
      this.listWeather = respuesta.data;
    },
    (error) => {
      console.log(error);
    }
    );
  }
}
