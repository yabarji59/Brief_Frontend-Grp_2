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
  userNameParameter: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = <User[]>this.usersJson;
    this.userNameParameter = this.route.snapshot.paramMap.get('username');
    this.user = this.users.find(
      (user) => user.login.username == this.userNameParameter
    );
    console.log(this.user);
  }
}
