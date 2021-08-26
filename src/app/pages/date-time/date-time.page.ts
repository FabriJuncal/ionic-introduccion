import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  // Definimos las variables que se enviarán a los tributos de los componentes
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['dom', 'lun', 'mar', 'mir', 'jue', 'vir', 'sab'];
  customMonthShortNames = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'];
  // Definimos la variable que tendra los botónes del DatePicker
  customPickerOptions: any;

  constructor() {

    // Creamos un array con los datos de los botónes que se mostrarán en el Date Picker
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',                                // Texto del botón
        handler: (event) => console.log('Clicked Save!', event)  // Función que se ejecuta al hacer "click" en el bóton
      }, {
        text: 'Log',
        handler: (event) => {
          console.log('Clicked Log. Do not Dismiss.', event);
          return false;
        }
      }]
    };

  }

  ngOnInit() {
  }

}
