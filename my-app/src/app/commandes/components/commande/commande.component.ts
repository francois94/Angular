import { Component, OnInit, Input } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Commande } from '../../interfaces/commande.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  @Input('commande') commande: Commande;
  state= State;
  constructor() { }

  ngOnInit() {
  }
  changeState(commande: Commande, newState: State): void {
    commande.state = newState;
}
}
