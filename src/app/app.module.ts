import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Importamos el Modulo de Componentes
import { ComponentsModule } from './components/components.module';
// Importamos el Modulo con las funciones para consumir las Apis desde Ionic
import { HttpClientModule } from '@angular/common/http';
// Importamos el Modulo con los Pipes
import { PipesModule } from './pipes/pipes.module';
// Importamos el Plugin para poder escaner distintos tipos de codigos
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// Importamos el componente de Calendario
import { CalendarModule } from 'ion2-calendar';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentsModule,
        PipesModule,
        HttpClientModule,
        CalendarModule.forRoot(),
        AutoCompleteModule,
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner],
    bootstrap: [AppComponent]
})
export class AppModule {}
