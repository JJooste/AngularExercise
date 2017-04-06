import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ConfigService } from '../config/config.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceBase {
    _baseUrl: string = '';
    public headers: Headers;
    public options: RequestOptions;

    constructor(
        public configService: ConfigService) {
        this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
        this._baseUrl = configService.getApiURI();
    }

    public buildHeaders() {
        this.headers = new Headers();
        this.headers
    }
    
    public handleError(error: any) {
        if (error.status == 401) {
            return Observable.throw('Unauthorized Access');
        }
        if (error.status == 403) {
            return Observable.throw('Forbidden Access');
        }
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}