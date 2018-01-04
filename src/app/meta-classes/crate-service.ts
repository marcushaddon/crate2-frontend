import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentAwareService } from './environment-aware-service';

@Injectable()
export class CrateService extends EnvironmentAwareService {
    constructor() {
        super();
    }
}
