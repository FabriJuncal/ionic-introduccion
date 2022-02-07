import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  // Repositorio del componente "ion-calendar":
  // https://github.com/hsuanxyz/ion2-calendar
  
  selectedDate: string = '';
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  calendarOptions: CalendarComponentOptions = {
    monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC'],
    weekdays: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Al iniciarlizarse el componente definimos en la variable "selectedDate"
    // con el valor de la fecha actual
    this.selectedDate = this.onFormattedDate();
  }


  onChange($event) {
    // Al seleccionar una fecha, formateamos el valor del evento lo guardamos en la variable "selectedDate"
    this.selectedDate = this.onFormattedDate($event._d);
  }

  // Helper que formatea la fecha
  private onFormattedDate(event = null) {
    const date = event ? new Date(event) : new Date();
    const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return formattedDate;
  }


}
