import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        let canActivate = true;
        if (canActivate) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}