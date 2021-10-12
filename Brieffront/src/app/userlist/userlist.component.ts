import { Component, OnInit } from '@angular/core';
import { UsercardComponent } from '../usercard/usercard.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  users: UsercardComponent[] = [
    {
      nom: "Brekker",
      prenom: "Kaz",
      email: "kazbrekker@sixofcrows.fr"
    },
    {
      nom: "Ghafa",
      prenom: "Inej",
      email: "inejghafa@sixofcrows.fr"
    },
    {
      nom: "Fahey",
      prenom: "Jesper",
      email: "jesperfahey@sixofcrows.fr"
    },
    {
      nom: "Zenik",
      prenom: "Nina",
      email: "ninazenik@sixofcrows.fr"
    }
  ];

  ngOnInit(): void {
  }

}
