import { Component, OnInit } from '@angular/core';
// Importamos el componente "Observable" de la libreria "Reactive Extensions"
import { Observable } from 'rxjs';
// Importamos el servicio que creamos para consumir la Api
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  // Definimos la variable "usuarios" como un elemento "Observable" del Tipo "any"
  usuarios: Observable<any>;

  // Le agregamos una dependencia al "constructor", en este caso será la Clase del Servicio del archivo "service/data.service"
  constructor(private dataService: DataService) { }

  ngOnInit() {

    // Hacemos referencia al metodo "getUser" de la clase "DataService" que se creó en el archivo "service/data.service"
    this.usuarios = this.dataService.getUser();

      // Hacemos referencia al metodo "getUser" de la clase "DataService" que se creó en el archivo "service/data.service"
      // Como en el metodo  "getUser" crea un Observable, se debe utilizar el metodo ".subscribe" para poder acceder a los datos
      // En el caso de querer cancelar los datos obtenidos del Observacle se utilizaría el metodo ".unsubscribe()"
      // Hay que tener cuidado por que si no se desenscriben de los Observables, puede haber un desperdicio de Memoria

      
      // this.dataService.getUser()
      //   .subscribe( (posts: any[]) => {
      //     console.log(posts)
      //   })

  }

}
