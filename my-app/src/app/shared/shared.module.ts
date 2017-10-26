import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './directives/state/state.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    StateDirective
  ],
  exports: [
    MenuComponent,
    StateDirective
  ]
})
export class SharedModule { }


// methode nativeElement de la class ElementRef pour récupérer l'élément html sur
// lequel  est appliqué la directive appState dans commandeComponent
// construire le bon nom de classe à ajouter en fionction du state récupéré

// construire le texte à ajouter dans le span en fonction du state récupéré
// ajouter class au span en fonction du state de la commande (this.appState)

// insérer texte dans span en fonction du state de la commande (this.appState)
