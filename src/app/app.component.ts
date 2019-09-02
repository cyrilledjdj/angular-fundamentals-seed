import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
}
