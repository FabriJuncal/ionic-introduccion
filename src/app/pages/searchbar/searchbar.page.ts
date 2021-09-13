import { Component, OnInit } from '@angular/core';
// Importamos los servicios que vamos a consumir para armar el listado
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Consumimos el servico de la API para obtener un listado de relleno
    this.dataService.getAlbumes()
    .subscribe( albumes => {
      console.log( albumes );
      this.albumes = albumes;
    });

  }

  // Obtenemos lo que se vaya escribiendo en el buscador
  onSearchChange( evento ){
    // console.log(evento);

    this.textoBuscar = evento.detail.value;
  }

}
