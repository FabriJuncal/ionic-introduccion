import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
// importamos la Clase "ItemReorderEventDetail" para usar sus funcionalidades para manejar el componente "reorder-group"
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  // Creamos un array de prueba
  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  // event: CustomEvent<ItemReorderEventDetail>: Creamos un parametro de Tipo "ItemReorderEventDetail"
  reorder( event: CustomEvent<ItemReorderEventDetail> ) {
    console.log(event);
    // Terminamos el ordenamiento con el metodo ".complete()"
    // y le pasamos como parametro "this.personajes" para guardar los campos realizados en la lista
    event.detail.complete(this.personajes);
  }

  // Con el evento "onClick" del botón mostramos el array por consola
  onClick(){
    console.log(this.personajes);
  }

}
