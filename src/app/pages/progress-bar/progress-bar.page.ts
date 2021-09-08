import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje = 0.01;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event){

    console.log(event.detail);

    // event.detail.value.upper => De esta manera se debería obtener el valor del "Range" si se tiene activada la configuración "dualKnobs"
    // this.porcentaje = event.detail.value.upper / 100;

    this.porcentaje = event.detail.value / 100;
  }

}
