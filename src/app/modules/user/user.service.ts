import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/interface/user.inteface';

@Injectable({ providedIn: 'root' })
export class UserService {
  userGivenValue = new EventEmitter<User>();
}
