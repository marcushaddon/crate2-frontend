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

  getAlbums(pagination: PaginationOptions = PaginationOptions.Default) {
    const endpoint = this._apiUrl + 'album';
    const options = this.buildOptions(pagination);
    return this.http.get<Album[]>(endpoint, options);
  }

  getAlbum(albumId: string, pagination = PaginationOptions.Default) {
    const endpoint = this._apiUrl + `album/${albumId}`;
    const options = this.buildOptions(pagination);
    return this.http.get<Album>(endpoint, options);
  }

}
