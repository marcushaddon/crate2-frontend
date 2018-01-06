import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';
import { Observable } from 'rxjs/Rx';
import { CrateService } from '../meta-classes/crate-service';
import { Track, PaginationOptions } from '../models';

@Injectable()
export class TrackService extends CrateService {

  constructor(private http: HttpClient) {
    super();
  }

  // TODO: Implement these methods when API has been updated!

  incrementListens(track: Track): Observable<Track> {
    const endpoint = this._apiUrl + `track/${track._id}/increment-listens`;
    return this.http.put<Track>(endpoint, track);
  }

}
