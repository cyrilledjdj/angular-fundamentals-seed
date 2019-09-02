import { Component } from '@angular/core';
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}
@Component({
  selector: 'app-root',
  template: /*html*/`
  <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index; let e = even; let o = odd; let f = first; let l = last">
          <span class=status [class.checked-in]=passenger.checkedIn></span>
          <span class=status [ngClass]="{
            'checked-in' : passenger.checkedIn,
            'checked-out' : !passenger.checkedIn
          }"></span>
          <span class=status [style.backgroundColor]="passenger.checkedIn ? '#2ecc71': '#c0392b'"></span>
          <span class=status [ngStyle]="{backgroundColor: passenger.checkedIn ? '#2ecc71': '#c0392b'}"></span>
          {{i}}: {{passenger.fullname}} {{ e + ' ' + o + ' ' + f + ' ' + l}}
        </li>
      </ul>
  </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false
    }
  ];
}
