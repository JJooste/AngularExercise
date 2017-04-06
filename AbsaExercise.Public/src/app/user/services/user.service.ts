import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, Login, Register, Authentication, Token } from '../models/user';
import { ServiceBase } from '../../shared/services/service-base';
import { ConfigService } from '../../shared/config/config.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService extends ServiceBase {

    constructor(private http: Http, configService: ConfigService) {
        super(configService);
    }

    login(login: Login) {
        console.log(login);
    }

    register(register: Register): Observable<Authentication> {
        

        return this.http.post(this.configService.getApiURI() + 'user/register', JSON.stringify(register), {headers: this.headers}).map(res => {
            return res.json();
        }).catch(this.handleError);
    }

}
