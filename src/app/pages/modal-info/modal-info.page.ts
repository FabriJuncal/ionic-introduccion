import { Component, Input, OnInit } from '@angular/core';
// Importamos la clase "ModalController" para obtener las funcionalidades para controlar el componente "modal"
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {


  // Estas variables de entrada desde el Componente Padre, debe ser igual al nombre de los parametros que se esta recibiendo de este
  // Es decir, las variables enviadas desde el objeto "componentProps"
  @Input() nombre;
  @Input() pais;

 // Creamos el objeto "usuario" para poder sincronizarlo con el formulario del archivo "form.page.html"
 usuarioModal = {
  nombre: '',
  pais: ''
};

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  // Función que solo cierra el modal
  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  // Función que cierra el modal y obtiene las variables con sus valores definidos
  // En los valores se pueden agregar variables que representen el contenido de algun input por ejemplo
  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre: this.usuarioModal.nombre,
      pais: this.usuarioModal.pais
    });
  }

}
