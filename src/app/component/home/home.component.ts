import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TranslationService} from '../../translation.service';
import {ShipManagerService} from '../ship-manager.service';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import {
  trigger,
  state,
  style,
  animate,
  transition, sequence,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '150px',
        opacity: 1,
      })),
      state('closed', style({
        top: '30px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s',
          style({
            top: '450px',
            opacity: 0,
          }),
        ),
      ]),
      transition('closed => open', [
        animate('1s',
          style({
            top: '150px',
            opacity: 1,
          }),
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  projects = this.s.projects;
  playing = -1;
  isOpen = false;
  titleText = '';
  titleTexts = [
    'Наутик Рус рыбопромысловые суда от проекта до сдачи',
    'У российского судостроения – яркое будущее',
    'Наша цель – создать лучшее конструкторское бюро в России',
  ];
  titleTextCounter = 0;
  constructor(public t: TranslationService, private s: ShipManagerService, private router: Router, public device: DeviceDetectorService) { }

  ngOnInit(): void {
    this.fillTitles();
    this.t.event.subscribe(event => {
      if (event === 'langChanged'){
        this.fillTitles();
      }
    });
  }
  fillTitles(): void{
    if (this.t.lang === 'RU'){
      this.titleTexts = [
        'Наутик Рус <br> рыбопромысловые суда <br> от проекта до сдачи',
        'У российского судостроения – <br>яркое будущее',
        'Наша цель – создать лучшее <br> конструкторское бюро в России',
      ];
    }
    else{
      this.titleTexts = [
        'Nautic Rus <br> fishing vessels <br> from a project to acceptance',
        'Russian shipbuilding <br> has a bright future',
        'Our goal is to create <br> best design bureau in Russia',
      ];
    }
    this.titleText = this.titleTexts[(this.titleTextCounter === 0 ? 0 : this.titleTextCounter - 1) % this.titleTexts.length];
  }
  ngAfterViewInit(): void {
    this.titleText = this.titleTexts[(this.titleTextCounter++) % this.titleTexts.length];
    setTimeout(() => {
      this.isOpen = true;
      this.switchText();
    }, 500);
  }

  switchText(): void{
    this.isOpen = true;
    setTimeout(() => {
      this.repeatText();
    }, 6000);
  }
  repeatText(): void{
    this.isOpen = false;
    setTimeout(() => {
      this.titleText = this.titleTexts[(this.titleTextCounter++) % this.titleTexts.length];
      this.switchText();
    }, 1500);
  }
  playVideo(value: number, video: any = null): void {
    this.playing = value;
    video.muted = true;
    video.play();
  }
  stopVideo(value: number): void{
    this.playing = -1;
  }

  isHidden(value: number): boolean {
    return this.playing !== value;
  }

  getVideoStyle(value: number): object {
    if (this.isHidden(value)){
      return {
        opacity: 0
      };
    }
    else{
      return {
        opacity: 1
      };
    }
  }

  openProject(ship: string): void {
    this.router.navigate(['project-details'], { queryParams: {ship}});
  }

}
