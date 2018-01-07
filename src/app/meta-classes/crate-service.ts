import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvironmentAwareService } from './environment-aware-service';
import { PaginationOptions, Search } from '../models';

@Injectable()
export class CrateService extends EnvironmentAwareService {
    constructor() {
        super();
    }

    protected buildOptions(pagination: PaginationOptions, search: Search = null): object {
        let params = new HttpParams();

        Object.keys(pagination)
        .forEach(key => params = params.set(key, pagination[key]));

        if (search) {
            Object.keys(search)
            .forEach(key => params = params.set(key, search[key]));
        }
        const options = {
            params: params
        };

        return options;
    }
}
