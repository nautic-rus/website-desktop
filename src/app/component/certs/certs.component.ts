import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';
import {TranslationService} from '../../translation.service';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {
  certUrl = 'assets/certs/rusregistercert.png';
  constructor(private lb: Lightbox, public t: TranslationService, public device: DeviceDetectorService) { }

  ngOnInit(): void {
  }
  open(img: string): void {
    this.lb.open([{src: img, caption: '', thumb: ''}], 0);
  }
}
