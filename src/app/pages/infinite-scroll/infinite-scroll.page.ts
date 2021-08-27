import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  // Creamos un array para crear los elementos de prueba
  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  // Creamos la función que ejecutará el evento "(ionInfinite)"
  loadData(event){
    console.log("cargando...");

    // Agregamos un setTimeout para simular una petición
    setTimeout(() => {
      // En el caso que el array "data" tenga mas de 50 elementos, se deja de agregar mas elementos
      if(this.data.length > 50){
        // Con esta función cortamos la animación del Spinner
        event.target.complete();
        // Con esta declaración desabilitamos que se siga ejecutando el evento "infinite Scroll"
        this.infiniteScroll.disabled = true;

        return;
      }

      // Creamos un nuevo array con 20 elementos
      const nuevoData = Array(20);
      // Agregamos los 20 elementos nuevos al array existente
      this.data.push(...nuevoData);
      // Cortamos la animación del Spinner
      event.target.complete();
    }, 1000);
  }

}
