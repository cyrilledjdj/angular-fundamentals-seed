import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
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
