import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoadingPageRoutingModule } from './loading-routing.module';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      // spinner: null,                              // Si es "null", no se mostrará el Spoinner
      // duration: 5000,                          // Duración que se va a mostrar el Loading
      message: 'Cargando',                        // Mensaje que se mostrará
      // translucent: true,                       // Si true, el indicador de carga será translúcido. Solo se aplica cuando el modo es "ios"
                                                  // y el dispositivo lo admite backdrop-filter.
      // cssClass: 'custom-class custom-loading', // De esta manera se agregan CSS personalizados
      // backdropDismiss: true                       // Quita el Loading al tocar fuera de este
    });

    // Muestra el Loading
    await this.loading.present();
  }

  // Función que se ejecuta al hacer click en el botón
  onClick(){
    // Muestra el Loading
    this.presentLoading();
    // Despues de 2 segundos se oculta el Loading
    setTimeout(() => {
      // .dismiss(): este metodo oculta el Loading
      this.loading.dismiss();
    }, 2000);
  }
}
