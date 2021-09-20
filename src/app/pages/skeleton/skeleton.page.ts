import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {

  // Declaramos un "ViewChild" para controlar un componente hijo, en este caso el "IonSegment"
  @ViewChild(IonSegment) segment: IonSegment;

  // Definimos un "Observacle" que admite cualquier dato (any),
  // de este modo el observable estará siempre pendiente del servicio API utilizado
  superHeroes: Observable<any>;
  publisher = '';

  // Importamos los servicios para consumir la API (En este caso es un JSON en local)
  constructor(private dataService: DataService) { }

  ngOnInit() {}

  // Función de Ionic que se ejecuta el terminar de mostrar toda la página
  ionViewDidEnter() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }

  // Función que se ejecuta al cambiar el segmento
  segmentChanged( evento ){

    // Obtenemos el valor del segmento seleccionado
    const valorSegmento = evento.detail.value;

    // Validamos si nos encontramos posicionados en el segmento "todos"
    // de este modo, mostramos toda la lista (sin filtro)
    if(valorSegmento === 'todos'){
      this.publisher = '';
      return;
    }

    // Asignamos el valor del segmento a "this.publisher" para que este filtre la lista
    this.publisher = valorSegmento;

    console.log(this.publisher);
  }

}
