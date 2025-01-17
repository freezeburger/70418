import { Injectable } from '@angular/core';
import { ReactiveBase } from '../utils/reactive-base';
import { Message } from '../interfaces/message';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends ReactiveBase<Message> {
  protected override URL: string = 'http://localhost:5050/messages';

  public override events$ = new ReplaySubject<string>().pipe(
    map( e => 'MessageService:'+ e )
  ) as ReplaySubject<string>; 

  protected override processRead(payload: Message[]): void {
    const data = payload.map( m => {
      return {...m , text: m.text.toUpperCase() }
    })
    super.processRead(data);
  }
}
