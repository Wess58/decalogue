import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

import projects from "../../assets/jsons/projects.json";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
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
export class ProjectsComponent implements OnInit {

  projects = projects;
  filters = [
    'all', 'residential', 'commercial', 'apartments',
    'institution', 'hospital'
  ];
  filteredProjects = [];
  currentFilter = 'all';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    const category = this.activatedRoute.snapshot.params['category'];
    this.toggleProjects(category);

  }

  toggleProjects(category: string): void {
    this.projects = [];
    this.currentFilter = category;

    this.projects = category === 'all' ? projects : projects.filter(project => {
      return project.category === category;
    });

    this.router.navigate(['/projects', category]);


  }

}
