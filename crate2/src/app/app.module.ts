import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Services
import { StereoService } from './services/stereo.service';
import { AuthService } from './services/auth.service';

// Components
import { HomeComponent } from './home/home.component';
import { StereoControlsComponent } from './stereo-controls/stereo-controls.component';
import { LoginComponent } from './login/login.component';

// Pipes
import { FriendlyTimePipe } from './pipes/friendly-time.pipe';

// Routes
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StereoControlsComponent,
    FriendlyTimePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    StereoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
