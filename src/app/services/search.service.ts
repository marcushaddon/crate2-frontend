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
  PaginationOptions
} from '../models';

@Injectable()
export class SearchService extends CrateService {

  constructor(private http: HttpClient) {
    super();
  }

}
