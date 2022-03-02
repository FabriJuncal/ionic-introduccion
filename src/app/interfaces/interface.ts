// En TypeScript se crean los "interface" para crear una plantilla con los tipos de datos ya definidos
export interface Componente{
    icon:       string;
    name:       string;
    redirectTo: string;
}


export class CountryModel {
    public alpha2Code:string;
    public alpha3Code:string;
    public altSpellings:string[];
    public area:number;
    public borders:string[];
    public callingCodes:string[];
    public capital:string;
    public cioc:string;
    public demonym:string;
    public flag:string;
    public latLang:number[];
    public name:string;
    public nativeName:string;
    public numericCode:string;
    public region:string;
    public subregion:string;
    public timezones:string[];
  
    constructor() {
  
    }
  }