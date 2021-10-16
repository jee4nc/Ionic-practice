import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  urlBase = 'https://mindicador.cl/api';

  constructor(private httpClient: HttpClient) { }

  getValuesCurrency(): Promise <any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlBase)
      .subscribe(respuesta => {
        resolve(respuesta);
      }, (err) => {
        reject(err);
      });
    });
  }

}
