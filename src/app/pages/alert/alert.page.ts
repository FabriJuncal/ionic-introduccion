import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  // Creamos el atributo que se mostrará en el titulo del Menú
  titulo: string;

  // AlertController: Pasamos el componente con el que va a inicializar el constructor de la clase "AlertPage"
  // alertCtrl: Es el nombre que le asignamos al componente importado y que se utilizará dentro de la Clase
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  // Creamos una función asincrona que ejecutará el botón "Mostrar Alert"
  async presentAlertConfirm() {
    // Utilizamos "await" para esperar que se arme el Alert antes de mostrarlo
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',                     // Clase del botón
      header: 'Esto es una alerta!',                   // TItulo del componente Alert
      message: 'Hola <strong>Mundo</strong>!!!',       // Mensaje que se mostrará en el Alert
      buttons: [                                       // Propiedades de los botónes que queremos que tenga el Alert
        {
          text: 'Cancelar',                            // Texto del botón
          role: 'cancel',                              // Rol del Botón, dependiendo del rol cambiará de color en la versión de IOS
          cssClass: 'secondary',                       // Clase css personalizada o de Ionic que le asignamos al botón
          handler: (blah) => {                         // Evento que se ejecuta al hacer click en el Botón
            console.log('Botón Cancelar');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Botón OK');
          }
        }
      ]
    });
    // Una vez que se termina de crear el Alert, este lo muestra
    await alert.present();
  }

  
  // Creamos una función asincrona que ejecutará el botón "Mostrar Alert"
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',     // Clase del botón
      header: 'Nombre',                // TItulo del componente Alert
      subHeader: 'Ingrese su Nombre',  // Subtitulo del componente Alert
      inputs: [                        // Propiedades de los Inputs que queremos que tenga el Alert
        {
          name: 'txtNombre',           // Nombre de la variable que vamos a recibir con el valor del input
          type: 'text',                // Tipo de Input
          placeholder: 'Nombre'         
        },
      //   {
      //     name: 'name2',
      //     type: 'text',
      //     id: 'name2-id',
      //     value: 'hello',
      //     placeholder: 'Placeholder 2'
      //   },
      //   // multiline input.
      //   {
      //     name: 'paragraph',
      //     id: 'paragraph',
      //     type: 'textarea',
      //     placeholder: 'Placeholder 3'
      //   },
      //   {
      //     name: 'name3',
      //     value: 'http://ionicframework.com',
      //     type: 'url',
      //     placeholder: 'Favorite site ever'
      //   },
      //   // input date with min & max
      //   {
      //     name: 'name4',
      //     type: 'date',
      //     min: '2017-03-01',
      //     max: '2018-01-12'
      //   },
      //   // input date without min nor max
      //   {
      //     name: 'name5',
      //     type: 'date'
      //   },
      //   {
      //     name: 'name6',
      //     type: 'number',
      //     min: -5,
      //     max: 10
      //   },
      //   {
      //     name: 'name7',
      //     type: 'number'
      //   },
      //   {
      //     name: 'name8',
      //     type: 'password',
      //     placeholder: 'Advanced Attributes',
      //     cssClass: 'specialClass',
      //     attributes: {
      //       maxlength: 4,
      //       inputmode: 'decimal'
      //     }
      //   }
      ],
      buttons: [                            // Propiedades de los botónes que queremos que tenga el Alert
        {
          text: 'Cancelal',                 // Texto del botón
          role: 'cancel',                   // Rol del Botón, dependiendo del rol cambiará de color en la versión de IOS
          cssClass: 'secondary',            // Rol del Botón, dependiendo del rol cambiará de color en la versión de IOS
          handler: () => {                  // Evento que se ejecuta al hacer click en el Botón
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: ({txtNombre}) => {       // Con destructuring obtenemos el valor del Input del Texto
            this.titulo = txtNombre;        // Le asignamos el valor del input al atributo "titulo" para que este cambie el titulo del menú
          }
        }
      ]
    });
    // Una vez que se termina de crear el Alert, este lo muestra
    await alert.present();
  }

}
