import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Services
import { StereoService } from './services/stereo.service';
import { HomeComponent } from './home/home.component';
import { StereoControlsComponent } from './stereo-controls/stereo-controls.component';
import { FriendlyTimePipe } from './pipes/friendly-time.pipe';

// Routes
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StereoControlsComponent,
    FriendlyTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    StereoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
