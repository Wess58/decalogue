import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss','../shared/footer/footer.component.scss'],
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
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
