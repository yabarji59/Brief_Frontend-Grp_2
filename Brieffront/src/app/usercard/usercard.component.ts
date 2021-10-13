import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit{

  userdata: User[];

  constructor(private userService: UserService) {
   }

   getUsers(): void {
    this.userdata = this.userService.getUsers();
  }

   ngOnInit(): void {
    this.userdata = this.userService.getUsers();
  }
  
}
