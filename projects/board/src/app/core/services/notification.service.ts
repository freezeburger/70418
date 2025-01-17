import { inject, Injectable } from '@angular/core';
import { ReactiveBase } from '../utils/reactive-base';
import { Notification } from '../interfaces/notification';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends ReactiveBase<Notification>{

  protected override URL: string = 'http://localhost:5050/notifications'

  messageServiceSub$ = inject(MessageService).events$.subscribe( text => {
    this.create({level:'MEDIUM', text})
  })

}
