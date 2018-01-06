import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { CrateService } from '../meta-classes/crate-service';
import {
  Playlist,
  PaginationOptions
} from '../models';

@Injectable()
export class PlaylistService extends CrateService {

  constructor(private http: HttpClient) {
    super();
  }

  getPlaylists(pagination: PaginationOptions = PaginationOptions.Default): Observable<Playlist[]>{
    const endpoint = this._apiUrl + '/playlist';
    const options = this.buildOptions(pagination);
    return this.http.get<Playlist[]>(endpoint, options);
  }

  getPlaylist(playlistId: string): Observable<Playlist> {
    const endpoint = this._apiUrl + `/playlist/${playlistId}`;
    return this.http.get<Playlist>(endpoint);
  }

  // There is no 'getPlaylistTracks method because a playlist's tracks are nested isnide it

  updatePlaylist(playlist: Playlist): Observable<Playlist> {
    const endpoint = `playlist/${playlist._id}`;
    return this.http.put<Playlist>(endpoint, playlist);
  }

  incrementListens(playlist: Playlist): Observable<Playlist> {
    const endpoint = `playlist/${playlist_id}/increment-listens`;
    return this.http.put<Playlist>(endpoint, playlist);
  }

  deletePlaylist(playlist: Playlist): Observable<Response> {
    const endpoint = this._apiUrl + `playlist/${playlist._id}`;
    return this.http.delete<Response>(endpoint);
  }

}
