import { Component, OnInit } from '@angular/core';
import results from '../../assets/JSON_Data_User.json';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  utilisateurs: any = results.results;
  userdata: User[];

  ngOnInit(): void {
    this.userdata = <User[]>this.utilisateurs;
  }

}
