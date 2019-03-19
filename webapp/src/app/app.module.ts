import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { HttpClientModule } from '@angular/common/http';

import { JobcardService } from './services/jobcard.service';

@NgModule({
  declarations: [
    AppComponent,
    JobcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
