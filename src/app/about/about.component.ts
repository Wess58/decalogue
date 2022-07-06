import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger } from '@angular/animations';

import about from "../../assets/jsons/about.json";
import home from "../../assets/jsons/home.json";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {

  about = about;
  services = home.services;

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);

  }

}
