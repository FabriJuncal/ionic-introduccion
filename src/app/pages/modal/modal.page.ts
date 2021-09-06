import { Component, OnInit } from '@angular/core';
// Importamos la Clase "ModalController" con las funcionalidades para los Modales
import { ModalController } from '@ionic/angular';
// Importamos el Componente de la Pagina "Modal Info"
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  // Definimos las variables globales de la clase
  modal: any;

  nombre: string;
  pais:   string;

  // Creamos el objeto "usuario" para poder sincronizarlo con el formulario del archivo "modal.page.html"
  usuario = {
    nombre: '',
    pais: ''
  };
  // Inicializamos la librería "ModalController" para obtener las funcionalidades para manipular el componente "Modal"
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

 // Definimos que la función será asincrona con "async"
 async abrirModal() {

      // con la función importada, creamos el modal, para eso se le pasa el siguiente objeto con sus respectivos datos
     this.modal = await this.modalCtrl.create({
      component: ModalInfoPage,     // Componente de la pagina que se creó para mostrarlo como modal
      componentProps: {             // Objeto que contendrá las variables que se quiera enviar (en este caso al componente hijo) con sus respectivos valores
        nombre: this.usuario.nombre,
        pais: this.usuario.pais
      }

    });

    // Se muestra el modal
    await this.modal.present();

    // Al cerrar el modal, obtenemos el objeto "data", este tendrá los valores de las variables "nombre" y "pais"
    // que se definió anteriormente en la función "salirConArgumentos" en el archivo "components/modal-info/modal-info.page.ts"
    const {data} = await this.modal.onDidDismiss();

    this.nombre = data.nombre ? data.nombre : '';
    this.pais = data.pais ? data.pais : '';
    console.log('Retorno del modal', data);
  }

}
