import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  user: User;
  userdata: User[];
  username: string;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {

    this.userdata = this.userService.getUsers();
    this.getUser();
  }

  getUser(): void {
    this.username = this.route.snapshot.paramMap.get('user.login.username');
    this.user = this.userdata.find(
      (user) => user.login.username == this.username);
  }

}
