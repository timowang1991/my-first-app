import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]', // becomes an attribute
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
