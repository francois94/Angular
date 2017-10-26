import { Component, OnInit } from '@angular/core';
import { Commande } from '../../interfaces/commande.model';
import { COLLECTION } from '../../collection';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.scss']
})
export class ListCommandesComponent implements OnInit {
  collection: Commande[] = COLLECTION;
  constructor() { }

  ngOnInit() {
  }

 changeState(commande: Commande, newState: State): void {
   commande.state = newState;
   console.log(commande);
 }

}
