import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { PaginationOptions } from '../models/pagination-options';
import { CrateService } from '../meta-classes/crate-service';
import {
  User,
  Artist,
  Album,
  Playlist,
  Track
} from '../models';

@Injectable()
export class UserService extends CrateService {

  constructor(private http: HttpClient) {
    super();
   }

   getUser(userId: string): Observable<User> {
     const endpoint = this._apiUrl + `user/${userId}`;
     return this.http.get<User>(endpoint);
   }

   getUserCrateArtists(userId: string, pagination = PaginationOptions.Default): Observable<Artist[]> {
    const endpoint = this._apiUrl + `user/${userId}/crate/artists`;
    const options = this.buildOptions(pagination);
    return this.http.get<Artist[]>(endpoint, options);
   }

   getUserCrateAlbums(userId: string, pagination = PaginationOptions.Default): Observable<Album[]> {
    const endpoint = this._apiUrl + `user/${userId}/crate/albums`;
    const options = this.buildOptions(pagination);
    return this.http.get<Album[]>(endpoint, options);
   }

   getUserCratePlaylists(userId: string, pagination = PaginationOptions.Default): Observable<Playlist[]> {
    const endpoint = this._apiUrl + `user/${userId}/crate/playlists`;
    const options = this.buildOptions(pagination);
    return this.http.get<Playlist[]>(endpoint, options);
   }

   getUserCrateTracks(userId: string, pagination = PaginationOptions.Default): Observable<Track[]> {
    const endpoint = this._apiUrl + `user/${userId}/crate/tracks`;
    const options = this.buildOptions(pagination);
    return this.http.get<Track[]>(endpoint, options);
   }

}
