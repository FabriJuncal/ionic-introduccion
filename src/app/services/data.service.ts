import { Injectable, Component } from '@angular/core';
// Importamos el Modulo con las funciones para consumir las Apis desde Ionic
import { HttpClient } from '@angular/common/http';

// Importamos la libreria "Reactive Extensions"
// tab: Su función es realizar una acción cuando recibe una "suscripción" (o se obtiene algun mensaje)  en el Observable
import { tap } from 'rxjs/operators';
// Importamos las interfaces
import { Componente } from '../interfaces/interface';


// Con esta función se le infica el alcance
// Lo dejaremos en "root", por que queremos que se puedan acceder a los servicios
// desde toda la aplicación
@Injectable({
  providedIn: 'root'
})

// Con esta Clase obtendremos un Observable que estara obteniendo toda la información de las peticiones HTTP
// Al poder asignar una observable directamente a la capa de presentación ganamos en flexibilidad
// Ya que por ejemplo podríamos obtener un "Observable" que emita elementos cada x tiempo.
// Para mas info ver la siguiente pagina:
// https://www.arquitecturajava.com/angular-async-pipe-y-observables/
export class DataService {

  // Le agregamos una dependencia al "constructor"
  // En este caso será la Clase "HttpClient" que contiene todos los metodos para realizar peticiones HTTP
  // Este mismo se encuentra dentro del archivo "@angular/common/http"
  constructor(private http: HttpClient) { }

  // Creamos un nuevo Metodo que hará referencia al metodo ".http.get" de la Clase "HttpClient" y le pasamos la URL del Servicio API
  // Y de este modo obtendra los datos de la petición que se realice

  // OPCIONAL
  // .pipe: este Metodo es utilizado para poder utilizar los operadores de la libreria "rxjs"
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( tap( console.log ) );
      // Versión Larga:
      // .pipe(
      //   tab( posts => {
      //     console.log(posts);
      //   }
      // )
  }

  // Creamos un Metodo para acceder a los datos del archivo "menu.json", donde este contendrá los nombres, iconos y rutas de cada Menu
  getMenuOptions(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

}