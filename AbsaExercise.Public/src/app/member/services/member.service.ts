import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceBase } from '../../shared/services/service-base';
import { ConfigService } from '../../shared/config/config.service';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';

import { Member } from '../models/member';

@Injectable()
export class MemberService extends ServiceBase{

  constructor(private http: Http, configService: ConfigService, authService: AuthService) {
    super(configService, authService);
   }

  getAll() : Observable<Member[]> {
    this.buildHeaders();
    return this.http.get(this.configService.getApiURI() + 'member', {headers: this.headers}).map(res => {
      return res.json().data;
    }).catch(this.handleError);
  }

}
