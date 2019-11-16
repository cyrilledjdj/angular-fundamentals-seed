import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: /*html*/`
  <div class="app">
    <passenger-viewer></passenger-viewer>
    <passenger-dashboard></passenger-dashboard>
  </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
