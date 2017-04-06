import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

    token: string;
    private userNameSource = new Subject<string>();
    userName$ = this.userNameSource.asObservable();

    constructor() {
        this.token = localStorage.getItem('auth-token');

        if (localStorage.getItem('userName'))
            this.userNameSource.next(localStorage.getItem('userName'));
    }

    getAuthenticationToken() {
        return this.token ? this.token : localStorage.getItem("auth-token");
    }

    getUserName() {
        return localStorage.getItem("userName");
    }

    saveAuthentication(token: string, userName: string) {
        this.token = token;
        this.userNameSource.next(userName);

        localStorage.setItem("auth-token", token);
        localStorage.setItem("userName", userName);
    }

    clearAuthentication() {
        this.token = null;
        this.userNameSource.next(null);

        localStorage.removeItem("auth-token");
        localStorage.removeItem("userName");
    }
}