import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
  @Input()
  detail: Passenger;
  constructor() { }

  ngOnInit() {
  }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

}
