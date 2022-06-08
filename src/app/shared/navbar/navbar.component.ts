import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { style, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
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
export class NavbarComponent implements OnInit {

  showMenu = false;
  constructor(
    public router: Router,

  ) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
