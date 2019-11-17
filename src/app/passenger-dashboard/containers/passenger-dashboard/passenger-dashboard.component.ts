import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService, private readonly router: Router) { }

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
  handleView(ev: Passenger) {
    this.router.navigate(['/passengers', ev.id])
  }
}
