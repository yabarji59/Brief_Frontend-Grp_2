import { Component, OnInit } from '@angular/core';
import { UsercardComponent } from './usercard/usercard.component';
import results from '../assets/JSON_Data_User.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: UsercardComponent[] = null;
  Utilisateurs: any = results;

  utilAffiche() {
    console.log(this.Utilisateurs);
  }

  ngOnInit() {
  }
}