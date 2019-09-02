import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
      <button (click)="handleClick()">Reset</button>
      <input type=text (input)="handleChange($event.target.value)">
      <ng-template [ngIf]="name.length> 2">
      <div>Search for... {{name}}</div>
      </ng-template>
      <div *ngIf="name.length > 2">Search for... {{name}}</div>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  name = '';
  logo = 'assets/img/logo.svg';
  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleChange(val: string | undefined) {
    this.name = val;
  }
  handleClick() {
    this.name = '';
  }
}
