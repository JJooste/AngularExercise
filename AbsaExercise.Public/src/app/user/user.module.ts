import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';

import { UserService } from './services/user.service';
import { ServiceBase } from '../shared/services/service-base';
import { AuthService } from '../shared/services/auth.service';
import { ConfigService } from '../shared/config/config.service';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [UserService, ConfigService, ServiceBase, AuthService]
})
export class UserModule { }
