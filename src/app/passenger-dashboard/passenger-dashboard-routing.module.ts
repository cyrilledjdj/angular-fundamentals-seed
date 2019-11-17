import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';


const routes: Routes = [
  {
    path: 'passengers', children: [
      { path: '', component: PassengerDashboardComponent },
      { path: ':id', component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerDashboardRoutingModule { }
