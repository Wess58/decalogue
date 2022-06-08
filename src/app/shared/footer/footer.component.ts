import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();
  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

}
