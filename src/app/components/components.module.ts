import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  // Solo se exportan los modulos que serán utilizados en otras paginas
  exports:[
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
