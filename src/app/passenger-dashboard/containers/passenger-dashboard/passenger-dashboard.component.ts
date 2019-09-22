import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor() { }

  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }];
  }

  handleRemove(ev: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== ev.id);
  }
  handleEdit(ev: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === ev.id) {
        // passenger = ev; // Works the same
        passenger = Object.assign({}, passenger, ev);
      }
      return passenger;
    });
  }
}
