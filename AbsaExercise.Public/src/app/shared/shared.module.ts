import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ButtonComponent } from './utilities/button/button.component';

//services
import { ConfigService } from './config/config.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard.service';
import { ServiceBase } from './services/service-base';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  providers: [ConfigService, AuthService, AuthGuard, ServiceBase, NotificationService]
})
export class SharedModule { }
