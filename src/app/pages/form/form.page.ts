import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  // Creamos la variable "nombre" para sincronizarlo con el campo "nombre"  del archivo "form.page.html"
  nombre: string;
  // Creamos el objeto "usuario" para poder sincronizarlo con el formulario del archivo "form.page.html"
  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }


  // Cremos la función que ejecutará el evento "(ngSubmit)" del archivo "form.page.html"
  onSubmitTemplate(){
    console.log('Form enviado!!');
    console.log( this.usuario );
  }

}
