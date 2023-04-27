import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IdentificationComponent } from './identification/identification.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    IdentificationComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {path: 'oui', component: AccueilComponent},
      {path: '', component: AppComponent}
    ]),
     NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
