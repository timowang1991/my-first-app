import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers.component';
import { ServerModule } from '../server/server.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    ServerModule,
    FormsModule
  ],
  exports: [
    ServersComponent,
  ]
})
export class ServersModule { }
