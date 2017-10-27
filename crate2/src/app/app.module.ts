import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Services
import { StereoService } from './stereo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StereoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
