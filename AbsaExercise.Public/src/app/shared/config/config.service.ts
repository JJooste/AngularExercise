import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {
    _baseURI:string;
    _apiURI: string;
    
    constructor() {
        this._baseURI = 'http://localhost:3000/';
        this._apiURI = this._baseURI + "api/";
    }
    getApiURI() {
        return this._apiURI;
    }
    getApiHost() {
        return this._apiURI.replace('api/', '');
    }
}