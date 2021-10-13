import { Component, OnInit } from '@angular/core';
import { User } from './user';
import results from '../assets/JSON_Data_User.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
}