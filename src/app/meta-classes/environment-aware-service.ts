import { environment } from '../../environments/environment';

export class EnvironmentAwareService {
    protected _baserUrl: string = environment.baseUrl;
    protected _apiUrl: string = environment.apiUrl;
}
