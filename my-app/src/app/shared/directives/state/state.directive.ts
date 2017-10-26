import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { State } from '../../../commandes/enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

@Input('appState') appState: State;
  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) { }

  ngOnChanges(): void {
    console.log(this.appState);
    const elementNode = this._ElementRef.nativeElement;
    const cssClass = `state-${this.appState}`;
    let text: string;

    switch (this.appState) {
      case State.ALIVRER:
        text = 'A livrer';
        break;
      case State.ENCOURS:
       text = 'En cours de livraison';
       break;
      case State.LIVREE:
        text = 'Commande livrée';
        break;
      default:
        console.log(this.appState);
        break;

    }
    this._Renderer2.addClass(elementNode, cssClass);
    elementNode.innerHTML = text;
  }
}
