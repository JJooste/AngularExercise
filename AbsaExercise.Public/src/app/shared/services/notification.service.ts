import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

    private successSource = new Subject<string>();
    success$ = this.successSource.asObservable();

    private infoSource = new Subject<string>();
    info$ = this.infoSource.asObservable();

    private errorSource = new Subject<string>();
    error$ = this.errorSource.asObservable();

    constructor() { }

    displaySuccess(message: string) {
        this.successSource.next(message);
    }

    displayInfo(message: string) {
        this.infoSource.next(message);
    }

    displayError(message: string) {
        this.errorSource.next(message);
    }
}