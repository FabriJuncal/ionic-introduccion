import { Component, OnInit } from '@angular/core';
import { AutoCompleteOptions } from 'ionic4-auto-complete';
import { ContriesAutocompleteService } from '../../services/contries-autocomplete.service';

@Component({
  selector: 'app-siemple-service-autocomplete',
  templateUrl: './siemple-service-autocomplete.component.html',
  styleUrls: ['./siemple-service-autocomplete.component.scss'],
})
export class SiempleServiceAutocompleteComponent{

  public options:AutoCompleteOptions;

  public selected:string = '';

  public labelAttribute:string;
  public objects:any[];

  constructor( public contriesSrv: ContriesAutocompleteService ) {

    // Configura el componente "Autocomplete"
    this.options = new AutoCompleteOptions();

    this.options.autocomplete = 'on';
    this.options.debounce = 750;
    this.options.placeholder = 'Type text to search..';
    this.options.type = 'add-friend.svg';
  }

  // Obtiene el nombre del evento del componente que se ejecuta
  on(output, event):void {
    console.log(output);
    // console.log(event);
  }
}
