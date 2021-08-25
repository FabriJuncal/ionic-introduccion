import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  // Definimos un array con los valores de los atributos que tendran los Checks
  data = [
    {
      name: 'primary',
      selected: true,
      disabled: false
    },
    {
      name: 'secondary',
      selected: false,
      disabled: false
    },
    {
      name: 'tertiary',
      selected: true,
      disabled: true
    },
    {
      name: 'success',
      selected: false,
      disabled: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // Definimos la función para obtener los valores de los checks
  onClick( check ){
    console.log(check);
  }

}
