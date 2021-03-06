import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listWeather: any;
  temp: any;
  celciusTemp: any;
  constructor(private weatherService: WeatherService) {
    this.obtenerWeather();
  }

  obtenerWeather() {
    this.weatherService.getWeather()
    .then(respuesta => {
      console.log(respuesta);
      this.listWeather = respuesta;
      this.temp = respuesta.main.temp;
      console.log(this.listWeather);
    },
    (error) => {
      console.log(error);
    }
    );
  }

}
