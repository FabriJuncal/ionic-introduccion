import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // Creamos la variable de tipo "Observable" y le indicamos que se inicializará como un array vacio
  // Observable: es un tipo de variable que se utiliza para almacenar los datos de las peticiones y
  //            tener a mano siempre información y no tener que acceder al servidor cada vez que lo necesitemos
  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService) {}

  onSplitPaneVisible(){
    // Realizamos una petición al archivo "assets/data/menu.json"
    // Donde en un archivo .json se almacenarán de manera estatica los nombres, iconos y rutas de los Menus
    this.componentes = this.dataService.getMenuOptions();
  }
}
