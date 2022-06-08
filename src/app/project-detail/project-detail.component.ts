import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { style, animate, transition, trigger } from '@angular/animations';

import projects from "../../assets/jsons/projects.json";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProjectDetailComponent implements OnInit {
  projects = projects;
  project: any = {};
  currentIndexImage = 0;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const currentIndex = this.activatedRoute.snapshot.params['index'];
    this.getSelectedProject(currentIndex);
  }

  getSelectedProject(index: any): void {
    // console.log(index);

    this.project = this.projects[index];
  }

}
