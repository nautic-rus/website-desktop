import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../../translation.service';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public t: TranslationService, public device: DeviceDetectorService) { }

  ngOnInit(): void {
  }

}
