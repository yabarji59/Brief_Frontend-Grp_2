import { Component, OnInit} from '@angular/core';
import results from '../../assets/JSON_Data_User.json';
import { User } from '../user';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit{

  utilisateurs: any = results.results;
  userdata: User[];

  constructor() {
   }

   ngOnInit(): void {
    this.userdata = <User[]>this.utilisateurs;
  }
  
}
