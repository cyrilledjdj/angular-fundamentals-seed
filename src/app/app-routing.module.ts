import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
  // { path: 'passengers', loadChildren: () => import('./passenger-dashboard/passenger-dashboard.module').then(mod => mod.PassengerDashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
