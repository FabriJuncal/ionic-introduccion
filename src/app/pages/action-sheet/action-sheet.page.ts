import { Component, OnInit } from '@angular/core';
// Importamos el componente de Ionic
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  // ActionSheetController: Pasamos el componente con el que va a inicializar el constructor de la clase "ActionSheetPage"
  // actionSheetCtrl: Es el nombre que le asignamos al componente importado y que se utilizará dentro de la Clase
  constructor(public actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
  }

  // Creamos una función asincrona que ejecutará el botón "Action Sheet"
  async presentActionSheet() {
    // Utilizamos "await" para esperar que se arme el Action Sheet antes de mostrarlo
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',                    // TItulo del componente Action Sheet
      cssClass: 'my-custom-class',         // Clase del botón
      backdropDismiss: false,              // Propiedad que indica si queremos que el action sheet se cierre al presionar fuera de este
      buttons: [{                          // Propiedades de cada Botón
        text: 'Delete',                    // Texto del Botón
        role: 'destructive',               // Rol del Botón, dependiendo del rol cambiará de color en la versión de IOS
        icon: 'trash',                     // Icono del Botón
        cssClass: 'rojo',                  // Clase css personalizada o de Ionic que le asignamos al botón
        handler: () => {                   // Evento que se ejecuta al hacer click en el Botón
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    // Una vez que se termina de crear el Action Sheet, este lo muestra
    await actionSheet.present();

    // Obtenemos el rol del botón que hizo que el Action Sheet se cierre
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



}
