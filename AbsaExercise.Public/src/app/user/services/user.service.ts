import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, Login, Register, Authentication, Token } from '../models/user';
import { ServiceBase } from '../../shared/services/service-base';
import { ConfigService } from '../../shared/config/config.service';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService extends ServiceBase {

    constructor(private http: Http, configService: ConfigService, authService: AuthService) {
        super(configService, authService);
    }

    login(login: Login): Observable<Authentication> {
        return this.http.post(this.configService.getApiURI() + 'user/authenticate', JSON.stringify(login), { headers: this.headers }).map(res => {
            return res.json();
        }).catch(this.handleError);
    }

    register(register: Register): Observable<Authentication> {
        return this.http.post(this.configService.getApiURI() + 'user/register', JSON.stringify(register), { headers: this.headers }).map(res => {
            return res.json();
        }).catch(this.handleError);
    }

}
