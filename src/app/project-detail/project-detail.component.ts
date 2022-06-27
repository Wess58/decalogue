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
  currentProjectCategory = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.currentProjectCategory = this.activatedRoute.snapshot.params['category'];
    this.projects = this.currentProjectCategory === 'all' ? projects : projects.filter(project => {
      return project.category === this.currentProjectCategory;
    });

    this.currentProjectIndex = +this.activatedRoute.snapshot.params['index'];
    this.project = this.projects[this.currentProjectIndex];

    setTimeout(() => {
      window.scroll(0, 0);

    }, 1000);
  }


  getSelectedProject(index: any): void {
    // console.log(index);
    this.currentProjectIndex = index;

    if (this.currentProjectIndex >= 0 || this.currentProjectIndex === this.projects.length - 1) {

      this.project = null;

      setTimeout(() => {
        this.project = this.projects[this.currentProjectIndex];
        this.router.navigate(['/project', this.currentProjectCategory, this.currentProjectIndex, this.project.title.trim().toLowerCase().replace(/,/g,'').split(' ').join('-')]);

      }, 100);

    }
  }

}
