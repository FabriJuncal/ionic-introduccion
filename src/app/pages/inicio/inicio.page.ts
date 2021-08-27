import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  // Este array sirve para cargar los Menus (de los componentes) de la pantalla principal
  // Solamente se tendra que cargar un objeto con: el icono, nombre, y la ruta de redirección
  componentes: Componente[] = [
    {
      icon: 'albums-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'apps-outline',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkboxs',
      redirectTo: '/check'
    },
    {
      icon: 'time-outline',
      name: 'Date Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'notifications-circle-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'reorder-four-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'reorder-two-outline',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'reader-outline',
      name: 'Form',
      redirectTo: '/form'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

// En TypeScript se crean los "interface" para crear una plantilla con los tipos de datos ya definidos
interface Componente{
  icon:       string;
  name:       string;
  redirectTo: string;
}
