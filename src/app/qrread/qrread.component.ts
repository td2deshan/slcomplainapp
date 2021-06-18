import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';

@Component({
  selector: 'app-qrread',
  templateUrl: './qrread.component.html',
  styleUrls: ['./qrread.component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class QrreadComponent implements OnInit {
 
 
    @ViewChild(QrScannerComponent, {static: true}) qrScannerComponent: QrScannerComponent ;

    name: string = 'no';
 
    ngOnInit() {
        
    }

    qrScan() {

      this.name = 'new';

      this.qrScannerComponent.getMediaDevices().then(devices => {
            // console.log(devices);
            const videoDevices: MediaDeviceInfo[] = [];
            for (const device of devices) {
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0){
                let choosenDev;
                for (const dev of videoDevices){
                    if (dev.label.includes('front')){
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    this.qrScannerComponent.chooseCamera.next(choosenDev);
                } else {
                    this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
 
        this.qrScannerComponent.capturedQr.subscribe(result => {
            console.log(result);
            this.name = result;
        });
    }
}
 