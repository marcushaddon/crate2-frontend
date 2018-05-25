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
import { MeService } from './services/me.service';
import { UserService } from './services/user.service';
import { ArtistService } from './services/artist.service';
import { AlbumService } from './services/album.service';
import { PlaylistService } from './services/playlist.service';
import { TrackService } from './services/track.service';
import { SearchService } from './services/search.service';

// Components
import { HomeComponent } from './home/home.component';
import { StereoControlsComponent } from './stereo-controls/stereo-controls.component';
import { LoginComponent } from './login/login.component';

// Pipes
import { FriendlyTimePipe } from './pipes/friendly-time.pipe';

// Interceptors
import { JWTInterceptor } from './interceptors/jwt.interceptor';
import { DeleteMeComponent } from './delete-me/delete-me.component';
import { MockHomeComponent } from './mock-home/mock-home.component';

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
    LoginComponent,
    DeleteMeComponent,
    MockHomeComponent
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
    MeService,
    UserService,
    ArtistService,
    AlbumService,
    PlaylistService,
    TrackService,
    SearchService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
