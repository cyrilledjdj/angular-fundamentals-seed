import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
      <button (click)="handleClick(username.value)">Change name (Reset)</button>
      <input type=text #username>
      <div>{{name}}</div>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  name = 'Cyrille';
  logo = 'assets/img/logo.svg';
  constructor() {
    this.title = 'Ultimate Angular';
  }


  handleClick(val) {
    this.name = 'Cyrille';
    console.log(val);
  }
}
