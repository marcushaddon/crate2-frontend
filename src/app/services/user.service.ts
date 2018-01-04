import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrateService } from '../meta-classes/crate-service';

@Injectable()
export class UserService extends CrateService {

  constructor(private http: HttpClient) {
    super();
   }

}
