import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // Creamos y utilizamos el pipe "filtro" para filtrar y obtener un array con las similitudes que se encuentren
  transform(arreglo: any[],
            texto: string,
            columna: string): any[] {

    console.log(arreglo);

    // Validamos que el texto del buscador no se encuentre vacio
    if( texto === ''){
      return arreglo;
    }

    // Transformamos el texto para no diferencia minusculas y mayusculas
    texto = texto.toLowerCase();

    // Filtramos el array con el texto y la columna que pasamos como parametro
    return arreglo.filter(item => {
      return item[columna].toLowerCase()
              .includes( texto );
    });

  }

}
