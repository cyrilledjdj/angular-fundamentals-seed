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
          {{i}}: {{passenger.fullname}} {{ e + ' ' + o + ' ' + f + ' ' + l}}
        </li>
      </ul>
      <h3>Airline Passengers Template</h3>
      <ul>
      <ng-template ngFor let-passenger [ngForOf]="passengers" let-i="index" let-e="even" let-o="odd" let-f="first" let-l="last">
        <li>
          {{i}}: {{passenger.fullname}} {{ e + ' ' + o + ' ' + f + ' ' + l}}
        </li>
        </ng-template>
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
