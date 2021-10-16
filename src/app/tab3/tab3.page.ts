import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listCurrency: any;
  valueDolar: any;
  valueEur: any;

  myGroup: any;
  secondGroup: any;

  firstcode: any;
  secondCode: any;
  firstValue: any;
  secondValue: any;

  input1: any;

  result: any;

  constructor(private currencyService: CurrencyService ) {
    this.obtenerCurrency();
    this.myGroup = new FormGroup(
      {
        fvalue: new FormControl()
      }
    );
    this.secondGroup = new FormGroup( {
      svalue: new FormControl()
    });
  }

  obtenerCurrency() {
    this.currencyService.getValuesCurrency()
    .then(respuesta => {
      console.log(respuesta);
      this.listCurrency = respuesta;
      this.valueDolar = respuesta.dolar.valor;
      this.valueEur = respuesta.euro.valor;
      console.log(this.listCurrency);
      console.log(this.valueDolar);
      console.log(this.valueEur);
    },
    (error) => {
      console.log(error);
    });
  }

  fvalueChange($event) {
    console.log($event.target.value);
    this.firstcode = $event.target.value;

    if (this.firstcode === 'CLP') {
      this.firstValue = 1;
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Primer valor : " + this.firstValue);

    }

    if (this.firstcode === 'DOLAR') {
      this.firstValue = this.valueDolar;
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Primer valor : " + this.firstValue);
    }

    if (this.firstcode === 'EURO ') {
      this.firstValue = this.valueEur;
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Primer valor : " + this.firstValue);
    }
  }

  svalueChange($event) {
    console.log($event.target.value);
    this.secondCode = $event.target.value;

    if (this.secondCode === 'CLP') {
      this.secondValue = 1;
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Segundo valor : " + this.secondValue);
    }

    if (this.secondCode === 'DOLAR') {
      this.secondValue = this.valueDolar;
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Segundo valor : " + this.secondValue);
    }

    if (this.secondCode === 'EURO') {
      this.secondValue = this.valueEur;
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("Segundo valor : " + this.secondValue);
    }
  }

  calculate() {
     const v1 = this.firstValue * this.input1;
     this.result = v1 / this.secondValue;
     this.result = parseFloat(this.result).toFixed(2);
  }
}
