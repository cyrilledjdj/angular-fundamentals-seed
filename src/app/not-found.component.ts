import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: /*html*/`
    <p>
      Not Found, <a routerLink="/">Go Home</a>
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
