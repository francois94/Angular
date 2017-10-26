import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CommandesModule } from './commandes/commandes.module';

import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router';
import { AppRoutineModule } from './app-routine.module';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommandesModule,
    AppRoutineModule,
    CoreModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(router: Router) {
  if (!environment.production) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
}
