import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  // Definimos la variable donde irán las clases que ocultarán el avatar al regresar a la página principal 
  // (Por que en IOS queda poco prensentable de la forma automatica)
  ocultar = '';

  // Creamos el array con la difinición de tipos (para tener la ayuda de TypeScript)
  // El arreglo tendra datos que se mostrarán en el Fron-End
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  // Esta función agregará estilos al Avatar y redireccionará a la pantalla principal
  onClick(){

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
  }

}
