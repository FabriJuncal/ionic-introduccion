import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// Importamos la clase "RouterModule", donde contiene las funciones par autilizar el "RouterLink"
import { RouterModule } from '@angular/router';
// Importamos la clase "AutocompleteModule", donde contiene las funciones para utilizar el "Autocomplete"
import {AutoCompleteModule} from 'ionic4-auto-complete';
// Componentes Importados
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { SiempleServiceAutocompleteComponent } from './siemple-service-autocomplete/siemple-service-autocomplete.component';
import { ContriesAutocompleteService } from '../services/contries-autocomplete.service';







@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent,
    SiempleServiceAutocompleteComponent
  ],
  // Solo se exportan los modulos que serán utilizados en otras paginas
  exports:[
    HeaderComponent,
    MenuComponent,
    PopinfoComponent,
    SiempleServiceAutocompleteComponent
  ],
  // Importamos los modulos que serán utilizados en las paginas
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    AutoCompleteModule
  ],
  providers: [
    ContriesAutocompleteService
  ]
})
export class ComponentsModule { }
