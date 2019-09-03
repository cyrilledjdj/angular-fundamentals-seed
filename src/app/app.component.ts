import { Component } from '@angular/core';
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
}
@Component({
  selector: 'app-root',
  template: /*html*/`
  <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index; let e = even; let o = odd; let f = first; let l = last">
          <span class=status [class.checked-in]=passenger.checkedIn></span>
          <span *ngIf=false class=status [ngClass]="{ 'checked-in' : passenger.checkedIn, 'checked-out' : !passenger.checkedIn }"></span>
          <span *ngIf=false class=status [style.backgroundColor]="passenger.checkedIn ? '#2ecc71': '#c0392b'"></span>
          <span *ngIf=false class=status [ngStyle]="{backgroundColor: passenger.checkedIn ? '#2ecc71': '#c0392b'}"></span>
          {{i}}: {{passenger.fullname}} {{ e + ' ' + o + ' ' + f + ' ' + l}}
          <p> {{passenger | json}} </p>
          <div class=date>
            Check in date: {{passenger.checkInDate ? (passenger.checkInDate | date: 'MMMM d, y' | uppercase) : 'Not Checked In'}}
          </div>
        </li>
      </ul>
  </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null
  }];
}
