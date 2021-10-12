import { Component, OnInit } from '@angular/core';
import { UsercardComponent } from './usercard/usercard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: UsercardComponent[] = null;

  ngOnInit() {
  }
}
