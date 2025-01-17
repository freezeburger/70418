import { Injectable } from '@angular/core';
import { ReactiveBase } from '../utils/reactive-base';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends ReactiveBase<Message> {
  protected override URL: string = 'http://localhost:5050/messages'
}
