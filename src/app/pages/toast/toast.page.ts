import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, ToastController } from '@ionic/angular';
// Importamos la clase "IonList" para poder usar las funciones de esta para ocultar las opciones de los items de la lista

// Importamos el componente "Observable" de la libreria "Reactive Extensions"
import { Observable } from 'rxjs';
// Importamos el servicio que creamos para consumir la Api
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  @ViewChild(IonItemSliding) slidingItem: IonItemSliding;

  // Definimos la variable "usuarios" como un elemento "Observable" del Tipo "any"
  usuarios: Observable<any>;

  // Le agregamos una dependencia al "constructor",
  // en este caso será la Clase del Servicio del archivo "service/data.service"
  // y la Clase del controlador del Toast
  constructor(private dataService: DataService,
              private toastController: ToastController) { }

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

  // Esta función es la que mostrará el mensaje en el Toast
  async presentToast(message: string) {
    // con el "toastController" podremos configurar las propiedades del Toast para que se visualice como queramos
    const toast = await this.toastController.create({
      message,       // Mensaje que se va a mostrar, hacemos referencia al parametro de la función
      duration: 2000 // Duración que se va  amostrar el mensaje en milisegundos
    });
    toast.present();
  }



  favorite( user ){
    // Al presionar en el botón de "Favoritos", se mostrará el mensaje de "Guardado en Favoritos"
    this.presentToast('Guardado en Favoritos');
    this.slidingItem.closeOpened();
  }

  share( user ){
    // Al presionar en el botón de "Compartir", se mostrará el mensaje de "¡Compartido!"
    this.presentToast('¡Compartido!');
    this.slidingItem.closeOpened();
  }

  borrar( user ){
    // Al presionar en el botón de "Eliminar", se mostrará el mensaje de "¡Eliminado!"
    this.presentToast('¡Eliminado!');
    this.slidingItem.closeOpened();
  }


}
