import { Component, OnInit } from '@angular/core';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQRPage implements OnInit {

  scanSub: any;
  qrText: string;

  constructor(
    public platform: Platform,
    private qrScanner: QRScanner
  ) { }

  ngOnInit() {
  }

  startScanning() {
    // Optionally request the permission early
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scanSub = document.getElementsByTagName('body')[0].style.opacity = '0';
          debugger
          this.scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {
              document.getElementsByTagName('body')[0].style.opacity = '1';
              this.qrScanner.hide();
              this.scanSub.unsubscribe();

              this.qrText = textFound;
            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}