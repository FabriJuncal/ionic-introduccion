import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  // Solo se exportan los modulos que serán utilizados en otras paginas
  exports:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
