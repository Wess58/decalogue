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
  currentImageIndex = 0;
  currentProjectIndex = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.currentProjectIndex = +this.activatedRoute.snapshot.params['index'];
    this.project = this.projects[this.currentProjectIndex];

  }

  getSelectedProject(index: any): void {
    // console.log(index);
    this.currentProjectIndex = index;

    if (this.currentProjectIndex >= 0 || this.currentProjectIndex === this.projects.length - 1) {

      this.project = {};

      setTimeout(() => {
        this.project = this.projects[this.currentProjectIndex];
        this.router.navigate(['/project', this.currentProjectIndex, this.project.title.toLowerCase().split(' ').join('-')]);

        window.scroll(0, 0);
      }, 100);
    }
  }

}
