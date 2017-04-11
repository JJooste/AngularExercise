import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AuthService } from '../shared/services/auth.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopNavComponent, FooterComponent],
  exports: [TopNavComponent, FooterComponent],
  providers: [AuthService]
})
export class NavigationModule { }
