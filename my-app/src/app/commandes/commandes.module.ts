import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommandesComponent } from './containers/list-commandes/list-commandes.component';
import { CommandeComponent } from './components/commande/commande.component';
import { SharedModule } from '../shared/shared.module';
import { StateDirective } from '../shared/directives/state/state.directive';
import { CommandesRoutingModule } from './commandes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CommandesRoutingModule
  ],
  declarations: [
    ListCommandesComponent,
    CommandeComponent
  ],
  exports: [
    ListCommandesComponent,

  ]
})
export class CommandesModule { }
