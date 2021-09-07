import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
// Importamos el Componente que se mostrará en el popOver
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  // Importamos el controlador del Popover llamado "PopoverController" y le agregamos el Alias "popoverCtrl"
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( evento ){

    // Creamos el componente con sus respectivas configuraciones
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,  // Componente que se va a mostrar en el Popover
      event: evento,                // Le pasamos el Evento del componente que creará el Popover
      mode: 'ios',                  // Forzamos a que el Popover se visualice como en IOS
      backdropDismiss: false        // Indicamos que el Popover solo se cerrará al seleccionar una opción de este
    });

    // Mostramos el Popover
    await popover.present();

    // .onDidDismiss(): Este evento espera que el Popover se cierre por completo para activarse
    // const { data } = await popover.onDidDismiss();
    // .onWillDismiss(): Este evento se activa antes de que se cierre el Popover
    const { data } = await popover.onWillDismiss();

    console.log('Padre:', data);
  }

}
