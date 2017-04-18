import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {
    _baseURI:string;
    _apiURI: string;
    
    constructor() {
        this._baseURI = 'http://127.0.0.1:3000/';
        this._apiURI = this._baseURI + "api/";
    }
    getApiURI() {
        return this._apiURI;
    }
    getApiHost() {
        return this._apiURI.replace('api/', '');
    }
}