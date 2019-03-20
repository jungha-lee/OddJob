import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './components/jobcard/jobcard.component';
import { HttpClientModule } from '@angular/common/http';

import { JobCardService } from './services/jobcard.service';


@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
