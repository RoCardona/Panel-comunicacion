import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { BackofficeuserComponent } from './backofficeuser/backofficeuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    BackofficeComponent,
    BackofficeuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
