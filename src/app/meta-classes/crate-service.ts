import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvironmentAwareService } from './environment-aware-service';
import { PaginationOptions } from '../models/pagination-options';

@Injectable()
export class CrateService extends EnvironmentAwareService {
    constructor() {
        super();
    }

    protected buildOptions(pagination: PaginationOptions): object {
        const params = new HttpParams();

        const paramKeys = Object.keys(pagination);
        paramKeys.forEach(key => params.set(key, pagination[key]));

        const options = {
            params: params
        };

        return options;
    }
}
