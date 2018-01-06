import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CrateService } from '../meta-classes/crate-service';
import { BehaviorSubject } from 'rxjs/Rx';
import { User, ShortUser } from '../models/user';

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

}
