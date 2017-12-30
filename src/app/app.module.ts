import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

// Services
import { StereoService } from './services/stereo.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

// Components
import { HomeComponent } from './home/home.component';
import { StereoControlsComponent } from './stereo-controls/stereo-controls.component';
import { LoginComponent } from './login/login.component';

// Pipes
import { FriendlyTimePipe } from './pipes/friendly-time.pipe';

// Interceptors
import { JWTInterceptor } from './interceptors/jwt.interceptor';

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
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    StereoService,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
