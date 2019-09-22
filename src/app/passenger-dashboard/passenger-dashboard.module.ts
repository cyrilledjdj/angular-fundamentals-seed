import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule { }
