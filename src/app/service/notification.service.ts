import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '../enum/notificaton-type.enum';


@Injectable({providedIn: 'root'})
export class NotificationService {

  constructor(private notifier: NotifierService) {}

  public (type: NotificationType, message: string) {
    this.notifier.notify(type, message);
  }

  notify(type: NotificationType, message: string) {
    this.notifier.notify(type, message);

  }
}
