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
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleRemove(ev: Passenger) {
    this.passengerService.removePassenger(ev)
      .subscribe(_ => {
        this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== ev.id);
      });
  }
  handleEdit(ev: Passenger) {
    this.passengerService.updatePassenger(ev)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === data.id) {
            passenger = Object.assign({}, passenger, data);
          }
          return passenger;
        });
      });
  }
}
