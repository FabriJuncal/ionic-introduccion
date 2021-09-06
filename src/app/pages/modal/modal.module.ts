import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
// Importamos el modulo de Componentes
import { ComponentsModule } from '../../components/components.module';
// Importamos el Componente de la Pagina "Modal Info"
import { ModalInfoPage } from '../modal-info/modal-info.page';
// Importamos el Modulo de la Pagina "Modal Info"
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

@NgModule({
  // entryComponents: en este objeto se agregan como valores los componentes que se utilizarán para que de esta forma Angular solo compile
  //                  los componentes que se van a utilizar en la pantalla.
  entryComponents: [
    ModalInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    ComponentsModule,
    ModalInfoPageModule      // Es necesario importar el modulo de "Modal Info"
                             // para obtener todas las opciones y configuraciones de este Componente
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
