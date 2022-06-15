import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger } from '@angular/animations';

import home from "../../assets/jsons/home.json";
import projects from "../../assets/jsons/projects.json";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  stats = home.stats;
  services = home.services;
  projects = projects;
  currentBackground: any;
  currentImageIndex = 1;
  activateFade = false;
  lagerScreens = false;

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);

    if (window.innerWidth > 800) {
      this.lagerScreens = true;
    }

    this.activateFade = true;

    this.currentBackground = home.carouselImages[0];
    window.setInterval(this.setBackground.bind(this), 10000);

  }

  setBackground(): any {

    this.currentImageIndex++;
    this.currentImageIndex = this.currentImageIndex % home.carouselImages ?.length;

    this.currentBackground = null;
    setTimeout(() => {
      this.currentBackground = home.carouselImages[this.currentImageIndex];
    }, 10);

  }

}
