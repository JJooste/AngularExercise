import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopNavComponent],
  exports: [TopNavComponent],
  providers: [AuthService]
})
export class NavigationModule { }
