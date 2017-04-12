import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';
import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './shared/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    ToastModule.forRoot(),

    UserModule,
    MemberModule,
    NavigationModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
