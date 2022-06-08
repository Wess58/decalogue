import { Component, OnInit } from '@angular/core';
import projects from "../../assets/jsons/projects.json";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
