import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Passenger } from './models/passenger';
import { catchError } from 'rxjs/operators';

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
      .get<Passenger[]>(PASSENGER_API, { responseType: 'json' })
      .pipe(catchError(error => throwError(error)));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpService
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, { responseType: 'json' })
      .pipe(catchError(error => throwError(error)));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpService
      .delete<Passenger>(`${PASSENGER_API}/${passenger.id}dumb`, { responseType: 'json' })
      .pipe(catchError(error => throwError(error)));
  }
}
