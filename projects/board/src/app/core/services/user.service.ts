import { Injectable } from '@angular/core';
import { ReactiveBase } from '../utils/reactive-base';
import { map, ReplaySubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ReactiveBase<User> {
  protected override URL: string = 'http://localhost:5050/users';

  public override events$ = new ReplaySubject<string>().pipe(
    map( e => 'UserService:'+ e )
  ) as ReplaySubject<string>; 


}
