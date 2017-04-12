import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit, OnDestroy {

  userName: string;

  userNameSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.getUserName();
    this.userNameSubscription = this.authService.userName$.subscribe(userName => {
      this.userName = userName;
    });
  }

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.router.navigate(['register']);
  }

  logout() {
    this.authService.clearAuthentication();
    this.router.navigate(['login']);
  }

  members() {
    this.router.navigate(['members']);
  }

  ngOnDestroy() {
    this.userNameSubscription.unsubscribe();
  }
}
