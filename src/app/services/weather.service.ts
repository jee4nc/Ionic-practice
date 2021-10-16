import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlBase =  'https://api.openweathermap.org/data/2.5/weather?id=3871336&appid=118aae800da976b1881e75f9b47551a7';


  constructor(private httpClient: HttpClient) { }

  getWeather(): Promise <any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlBase)
      .subscribe(respuesta => {
        resolve(respuesta);
      }, (err) => {
        reject(err);
      });
    });
  };
}
