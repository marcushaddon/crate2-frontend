import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import {
  Artist,
  Album,
  Track,
  PaginationOptions
} from '../models';
import { CrateService } from '../meta-classes/crate-service';

@Injectable()
export class AlbumService extends CrateService {

  constructor(private http: HttpClient) {
    super();
  }

  getAlbums(pagination: PaginationOptions = PaginationOptions.Default): Observable<Album[]> {
    const endpoint = this._apiUrl + 'album';
    const options = this.buildOptions(pagination);
    return this.http.get<Album[]>(endpoint, options);
  }

  getAlbum(albumId: string, pagination = PaginationOptions.Default): Observable<Album> {
    const endpoint = this._apiUrl + `album/${albumId}`;
    const options = this.buildOptions(pagination);
    return this.http.get<Album>(endpoint, options);
  }

  getAlbumTracks(albumId: string): Observable<Track[]> {
    const endpoint = this._apiUrl + `album/${albumId}/tracks`;
    return this.http.get<Track[]>(endpoint);
  }

  createAlbum(album: Album): Observable<Album> {
    const endpoint = this._apiUrl + 'album';
    return this.http.post<Album>(endpoint, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    const endpoint = this._apiUrl + `album/${album._id}`;
    return this.http.put<Album>(endpoint, album);
  }

  deleteAlbum(album: Album): Observable<Response> {
    const endpoint = this._apiUrl + `album/${album._id}`;
    return this.http.delete<Response>(endpoint);
  }

}
