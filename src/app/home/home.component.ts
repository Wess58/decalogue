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
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({ opacity: 0.5 }),
        animate(1500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  stats = home.stats;
  services = home.services;
  projects = projects;

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);



  }

}
