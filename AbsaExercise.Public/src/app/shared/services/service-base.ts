import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ConfigService } from '../config/config.service';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServiceBase {
    _baseUrl: string = '';
    public headers: Headers;
    public options: RequestOptions;

    constructor(
        public configService: ConfigService, public authService: AuthService) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        this._baseUrl = configService.getApiURI();
    }

    public buildHeaders() {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.headers.append("x-access-token", this.authService.getAuthenticationToken());
    }

    public handleError(error: any) {


        if (error.status == 401) {
            alert('Unauthenticated, please log in again');
        }
        if (error.status == 403) {
            alert('Unauthorized, please log in again');
        }

        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json().message;

        return Observable.throw(applicationError || serverError || 'Server error');
    }
}