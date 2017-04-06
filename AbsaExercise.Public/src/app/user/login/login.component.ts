import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Login } from '../models/user';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(login: Login) {
    this.userService.login(login).subscribe(authentication => {
      if(authentication.success) {
        this.authService.saveAuthentication(authentication.data.token, authentication.data.userName);
        this.router.navigate(['members']);
      } else {
        alert(authentication.message);
      }
    }, error => {

    });
  }
}
