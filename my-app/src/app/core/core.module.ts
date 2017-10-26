import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './components/core-routing/core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
     HomeComponent, PageNotFoundComponent],
     exports: [
       HomeComponent, PageNotFoundComponent
     ]

})
export class CoreModule { }
