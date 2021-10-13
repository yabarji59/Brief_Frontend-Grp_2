import { Injectable } from '@angular/core';
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
}
