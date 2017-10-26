import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListCommandesComponent } from '../../../commandes/containers/list-commandes/list-commandes.component';

const cmdRoutes: Routes = [
  {path: 'list', component: ListCommandesComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      cmdRoutes)
],
  declarations: []
})
export class CoreRoutingModule { }
