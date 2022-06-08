import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project/:index/:name',
    component: ProjectDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
