import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//npm install json-server and run json-server --watch api/db.json to be able to use this api
const PASSENGER_API = 'http://localhost:3000/passengers';
@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private httpService: HttpClient) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.httpService
      .get<Passenger[]>(PASSENGER_API, { responseType: 'json' });
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpService
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, { responseType: 'json' });
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpService
      .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`, { responseType: 'json' });
  }
}
