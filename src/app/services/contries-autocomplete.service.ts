import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { CountryModel } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Es necesario implementar "AutoCompleteService" para poder utilizar el "Autocomplete"
export class ContriesAutocompleteService implements AutoCompleteService{

  labelAttribute = 'name';

  private countries:CountryModel[] = [];

  constructor( private http:HttpClient ) { }

  // Es necesario que la clase tenga el metodo "getResults" para que funcione el "Autocomplete"
  getResults(keyword?:string):Observable<any[]> {
    
    // Recibe el valor del input del Autocomplete
    keyword = typeof keyword === 'string' ? keyword : '';
    
    let observable:Observable<any>;

    // Si el observable "countries" no contiene algo, entonces obtene por una petición GET los datos
    if (this.countries.length === 0) {
      // Obtiene los datos con la Petición GET
      observable = this.http.get('assets/data/contries.json').pipe(
        // Recorremos cada valor obtenido de la Petición y lo guardamos en el array "countries"
        map(
          (results:CountryModel[]) => {

            if (results) {
              this.countries = results;
            }
            return this.countries;
          }
        )
      );

    // Si el observable "countries" contiene algo, entonces obtene por una petición GET los datos
    } else { 
      // of: Transforma el array "countries" en un observable y lo define a la variable "observable"
      observable = of(this.countries);
    }

    // Formateamos los valores obtenidos de la petición GET y lo filtramos según el valor del input
    return observable.pipe(
      map((result:CountryModel[]) => {
          // Filtramos el array "countries" según el valor del input
          let newContries = result.filter(
            (item) => {
              // Si existe algún valor en el array "countries" que comience con el valor del input del Autocomplete, 
              // returna "true" y se agrega el valor en el nuevo array "newContries"
              return item.name['common'].toLowerCase().startsWith(
                  keyword.toLowerCase()
              );
            }
          ); 
          
          // Formateamos el objeto "newContries" para que sea compatible con el "Autocomplete"
          newContries = newContries.map(country => {
            return country.name['common']
          });
          return newContries;
        }
      )
    );
  }
}
