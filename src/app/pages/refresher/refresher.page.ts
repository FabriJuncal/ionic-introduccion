import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  // Inicializamos la variable "items" como un array
  items: any = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ){
    console.log(event);

    // Utilizamos el "setTimeout" para simular una petición AJAX
    setTimeout(() => {
      // Terminamos la animación del componente al obtener la "petición"
      event.target.complete();

      // Definimos un array con 40 posiciones vacias
      this.items = Array(40);

    }, 1500);
  }

}
