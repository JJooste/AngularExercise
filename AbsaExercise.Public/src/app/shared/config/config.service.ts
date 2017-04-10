import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {
    _baseURI:string;
    _apiURI: string;
    
    constructor() {
        this._baseURI = 'http://192.168.99.100:3000/';
        this._apiURI = this._baseURI + "api/";
    }
    getApiURI() {
        return this._apiURI;
    }
    getApiHost() {
        return this._apiURI.replace('api/', '');
    }
}