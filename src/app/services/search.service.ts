import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { CrateService } from '../meta-classes/crate-service';
import {
  User,
  Artist,
  Album,
  Playlist,
  Track,
  PaginationOptions,
  Search
} from '../models';
import { ApiEntity } from '../enums/api-entity.enum';

@Injectable()
export class SearchService extends CrateService {

  constructor(private http: HttpClient) {
    super();
  }

  // TODO: Find good style guide for JS/TS
  search(search: string,
         entity: ApiEntity,
         pagination: PaginationOptions = PaginationOptions.Default): Observable<Artist[] | Album[] | Playlist[] | Track[] | User[]> {
    const endpoint = this._apiUrl + 'search';
    // Part of me thinks we should define a Search Class,
    // but another part of me doesn't know what purpose that would serve?
    const searchObject = new Search(search, entity);
    console.log(searchObject);
    const options = this.buildOptions(pagination, searchObject);
    return this.http.get<Artist[] | Album[] | Playlist[] | Track[] | User[]>(endpoint, options);
  }

}
