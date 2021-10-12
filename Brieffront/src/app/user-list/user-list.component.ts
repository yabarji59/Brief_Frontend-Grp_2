import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user/user';
import userJson from '../entities/user/users-mock.json';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  usersJson: any = userJson.results;
  users: User[];
  constructor() {}

  ngOnInit(): void {
    this.users = <User[]>this.usersJson;
    console.log(this.users);
  }

  /* Retourne un string avec le nom de l'image en fonction de l'age
  getImageByAge(age: number): string {
    if (age < 40) {
      return 'rookie.svg';
    } else if (age <= 60 && age >= 40) {
      return 'advance.svg';
    } else if (age > 60) {
      return 'expert.svg';
    }
    return '';
  } */
}
