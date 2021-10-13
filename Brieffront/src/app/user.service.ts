import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { USERDATA } from './userlist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERDATA;
  }

  getUser(username: string): User {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const user = USERDATA.find(h => h.login.username === username)!;
    //this.messageService.add(`HeroService: fetched user username=${username}`);
    return user;
  }
}
