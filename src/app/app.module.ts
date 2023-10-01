import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerModule } from './server/server.module';
import { ServersModule } from './servers/servers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServerModule,
    ServersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
