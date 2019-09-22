import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { of } from 'rxjs';

@Component({
  selector: 'passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {
  @Input() items: Passenger[];
  constructor() { }

  ngOnInit() {
  }

  checkedInCount() {
    if (!this.items) {
      return undefined;
    }
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
