import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';
import { NavigationModule } from './navigation/navigation.module';

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

    UserModule,
    MemberModule,
    NavigationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
