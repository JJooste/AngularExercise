import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Register } from '../models/user';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register(register: Register) {
    this.userService.register(register).subscribe(authentication => {
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
