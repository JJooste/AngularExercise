import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public toastr: ToastsManager, vRef: ViewContainerRef, public notificationService: NotificationService) {
    this.toastr.setRootViewContainerRef(vRef);

  }

  ngOnInit() {
    this.notificationService.success$.subscribe(message => {
      this.toastr.success(message, "Success");
    });

    this.notificationService.info$.subscribe(message => {
      this.toastr.info(message, "Information");
    });

    this.notificationService.error$.subscribe(message => {
      this.toastr.error(message, "Error");
    });
  }
}
