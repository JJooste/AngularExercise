import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';
import { NavigationModule } from './navigation/navigation.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function getAuthHttp(http: Http) {
        return new AuthHttp(new AuthConfig({
                noJwtError: true
        }), http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    UserModule,
    MemberModule,
    NavigationModule
  ],
  providers: [AuthGuard, {
    provide: AuthHttp,
    useFactory: getAuthHttp,
    deps: [Http]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
