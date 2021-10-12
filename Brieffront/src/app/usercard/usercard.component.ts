import { Component} from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent {

  nom:string= "hall";
  prenom: string;
  email: string;

  

  constructor() {
   }
  
}
