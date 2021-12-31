import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

// Importamos el Plugin para poder escaner distintos tipos de codigos
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQRPage implements OnInit {

  // Inicializamos la variable donde formatearemos los datos escaneados
  datos: any;

  constructor(
    public platform: Platform,
    public barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
  }

  startScanning() {

    // Estrablecemos las opciones del escaner
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: false,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,DATA_MATRIX,UPC_A,UPC_E,EAN_8,EAN_13,CODE_39,CODE_93,CODE_128,ITF,PDF_417,AZTEC', // Este campo es importante, ya que decidimos que tipo de codigos queremos escanear
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false, // iOS and Android
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      let dni = barcodeData.text.split('@');
      this.datos = {
        nroTramite: dni[0],
        apellido: dni[1],
        nombre: dni[2],
        sexo: dni[3],
        dni: dni[4],
        ejemplar: dni[5],
        fechaNacimiento: dni[6],
        fechaEmision: dni[7],
        inicioFinCuil: dni[8]
      }

      console.log(this.datos);

     }).catch(err => {
         console.log('Error', err);
     });
  }

}
