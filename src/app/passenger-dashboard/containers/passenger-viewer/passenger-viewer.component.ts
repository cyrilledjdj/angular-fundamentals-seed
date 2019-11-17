import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Passenger } from '../../models/passenger';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { switchMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(private readonly passengerService: PassengerDashboardService, private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((data: Params) => this.passengerService.getPassenger(data.id))
      )
      .subscribe((data: Passenger) => {
        this.passenger = data;
      })
  }

  goBack() {
    this.router.navigate(['/passengers'])
  }

  onUpdatePassenger(eventData: Passenger) {
    this.passengerService.updatePassenger(eventData)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, data);
      });
  }

}
