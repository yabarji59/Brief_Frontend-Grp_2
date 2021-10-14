import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../entities/user/user';
import userJson from '../entities/user/users-mock.json';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  usersJson: any = userJson.results;
  users: User[];
  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = <User[]>this.usersJson;

    this.user = this.users.find(
      (user) =>
        user.login.username == this.route.snapshot.paramMap.get('username')
    );

    /*
    for (const user of this.users) {
      if (user.login.username == this.route.snapshot.paramMap.get('username')) {
        this.user = user;
      }
    } */

    /*
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].login.username ==
        this.route.snapshot.paramMap.get('username')
      ) {
        this.user = this.users[i];
      }
    } */

    console.log(this.user);
  }
}
