import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CrateService } from '../meta-classes/crate-service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import {
  User,
  ShortUser,
  Artist,
  Album,
  Playlist,
  Track,
  CrateItem } from '../models';
import { ApiEntity } from '../enums/api-entity.enum';

@Injectable()
export class MeService extends CrateService {

  constructor(private http: HttpClient) {
    super();
  }

  me: ShortUser = null;
  meUpdated: BehaviorSubject<ShortUser> = new BehaviorSubject<ShortUser>(null);

  fetchIdentity(): void {
    const endpoint = this._apiUrl + 'user/whoAmI';
    this.http.post<ShortUser>(endpoint, null)
    .subscribe(res => {
      this.me = res;
      this.meUpdated.next(this.me);
    });
  }

  // TODO: Add 'Add item to crate' method
  addToCrate(item: any ): Observable<any> {
    let resource: string;
    // Not sure why typeof and instanceof arent doing what I need?
    if (item.listType) {
      resource = item.listType === 'album' ? ApiEntity.Albums : ApiEntity.Playlists;
    } else if (item.trackName) {
      resource = ApiEntity.Tracks;
    } else if (item.bio) {
      resource = ApiEntity.Artists;
    }

    // TODO: Add users to your crate!
    if (resource) {
      const endpoint = this._apiUrl + `user/${this.me.userId}/crate/${resource}`;
      return this.http.put(endpoint, item);
    }
    // Hmm?
    return new Observable<null>();
  }
}
