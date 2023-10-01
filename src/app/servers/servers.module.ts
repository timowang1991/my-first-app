import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers.component';
import { ServerModule } from '../server/server.module';



@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    ServerModule,
  ],
  exports: [
    ServersComponent,
  ]
})
export class ServersModule { }
