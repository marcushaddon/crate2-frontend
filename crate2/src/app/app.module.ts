import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Services
import { StereoService } from './stereo.service';
import { HomeComponent } from './home/home.component';

// Routes
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    StereoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
