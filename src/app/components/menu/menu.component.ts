import { Component, OnInit } from '@angular/core';
// Importamos el observable
import { Observable } from 'rxjs';
// Importamos los servicios
import { DataService } from '../../services/data.service';
// Importamos las interfaces
import { Componente } from '../../interfaces/interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  // Creamos la variable de tipo "Observable" y le indicamos que se inicializará como un array vacio
  // Observable: es un tipo de variable que se utiliza para almacenar los datos de las peticiones y
  //            tener a mano siempre información y no tener que acceder al servidor cada vez que lo necesitemos
  componentes: Observable<Componente[]>;

  // constructor: función donde se debe indicar las Clases importadas que se van a inicializar para poder utilizar los Metodos de estas
  // DataService: dependencia personalizada que se creó en el archivo "services/data.service" y
  //              poder acceder a los servicios consumidos mediantes peticiones

  //                    |Alias| Clase importada|
  constructor( private dataService: DataService) { }

  // ngOnInit: Evento que hace referencia al iniciar la pantalla por 1ra vez
  ngOnInit() {
  // Realizamos una petición al archivo "assets/data/menu.json"
  // Donde en un archivo .json se almacenarán de manera estatica los nombres, iconos y rutas de los Menus
    this.componentes = this.dataService.getMenuOptions();
  }

}
