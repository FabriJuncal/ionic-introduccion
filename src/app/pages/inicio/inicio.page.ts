import { Component, OnInit } from '@angular/core';
// MenuController: dependencia que carga las funcionalidades para controlar el componente "menu"
import { MenuController } from '@ionic/angular';
// Importamos el Observable
// Observable: es un tipo de variable que se utiliza para almacenar los datos de las peticiones y
//            tener a mano siempre información y no tener que acceder al servidor cada vez que lo necesitemos
import { Observable } from 'rxjs';
// Importamos las Interfaces creadas
import { Componente } from '../../interfaces/interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  // Creamos la variable de tipo "Observable" y le indicamos que se inicializará como un array vacio
  // Observable: es un tipo de variable que se utiliza para almacenar los datos de las peticiones y
  //            tener a mano siempre información y no tener que acceder al servidor cada vez que lo necesitemos
  componentes: Observable<Componente[]>;

  // constructor: función donde se debe indicar las Clases importadas que se van a inicializar para poder utilizar los Metodos de estas
  // MenuController: dependencia que carga las funcionalidades para controlar el componente "menu"
  // DataService: dependencia personalizada que se creó en el archivo "services/data.service" y
  //              poder acceder a los servicios consumidos mediantes peticiones

  //                    |Alias| Clase importada|
  constructor( private menuCtrl: MenuController,
               private dataService: DataService) { }

  // ngOnInit: Evento que hace referencia al iniciar la pantalla por 1ra vez
  ngOnInit() {
  // Realizamos una petición al archivo "assets/data/menu.json"
  // Donde en un archivo .json se almacenarán de manera estatica los nombres, iconos y rutas de los Menus
    this.componentes = this.dataService.getMenuOptions();
  }

  // Creamos la función que ejecutará el evento "click" el botón del icono de hamburguesa del menu
  toggleMenu() {
    // .toggle: Atributo de la librería importada "MenuController", donde lo utilizaremos para cerrar la ventana del menu lateral 
    //          cada vez que seleccionemos una opción
    this.menuCtrl.toggle();
  }

}
