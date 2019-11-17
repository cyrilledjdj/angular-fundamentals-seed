import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string;
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ]
}
