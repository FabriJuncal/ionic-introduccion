import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
// Importamos la clase "RouterModule", donde contiene las funciones par autilizar el "RouterLink"
import { RouterModule } from '@angular/router';




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
  // Importamos los modulos que serán utilizados en las paginas
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
