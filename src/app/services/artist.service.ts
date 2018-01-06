import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { CrateService } from '../meta-classes/crate-service';
import {
  User,
  ShortUser,
  Artist,
  Album,
  Playlist,
  Track,
  ITrackList
} from '../models';
import { HttpParams } from '@angular/common/http/src/params';
import { PaginationOptions } from '../models/pagination-options';

@Injectable()
export class ArtistService extends CrateService {

  constructor(private http: HttpClient) {
    super();
  }

  getArtist(artistId: string): Observable<Artist> {
    const endpoint = this._apiUrl + `artist/${artistId}`;
    return this.http.get<Artist>(endpoint);
  }

  getArtistAlbums(artistId: string): Observable<Album[]> {
    const endpoint = this._apiUrl + `artist/${artistId}/albums`;
    return this.http.get<Album[]>(endpoint);
  }

  getArtistTracks(artistId: string, pagination: PaginationOptions = PaginationOptions.Default): Observable<Track[]> {
    const endpoint = this._apiUrl + `artist/${artistId}/tracks`;
    const options = this.buildOptions(pagination);
    return this.http.get<Track[]>(endpoint, options);
  }

  createArtist(artist: Artist): Observable<Artist> {
    const endpoint = this._apiUrl + 'artist';
    return this.http.post<Artist>(endpoint, artist);
  }

  updateArtist(artist: Artist): Observable<Artist> {
    const endpoint = this._apiUrl + `artist/${artist._id}`;
    return this.http.put<Artist>(endpoint, artist);
  }

  incrementListens(artist: Artist): Observable<Artist> {
    const endpoint = this._apiUrl + `artist/${artist._id}/increment-listens`;
    return this.http.put<Artist>(endpoint, artist);
  }



}
