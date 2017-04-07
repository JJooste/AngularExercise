import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceBase } from '../../shared/services/service-base';
import { ConfigService } from '../../shared/config/config.service';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';

import { Country } from '../models/country';

@Injectable()
export class CountryService extends ServiceBase {

  constructor(configService: ConfigService, authService: AuthService, private http: Http) {
    super(configService, authService);
  }

  getAll(): Observable<Country[]> {
    this.buildHeaders();

    return this.http.get(this.configService.getApiURI() + "country", { headers: this.headers }).map(res => {
      return res.json().data;
    }).catch(this.handleError);
  }
}
