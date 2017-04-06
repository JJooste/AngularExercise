import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        let authToken = this.authService.getAuthenticationToken();
        if (authToken) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}