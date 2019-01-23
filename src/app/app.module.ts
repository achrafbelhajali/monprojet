import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FirstComponent} from './first.component';
import {IdentificationComponent} from './identification.component';
import {PublierComponent} from './publier.component';
import {ConnexionComponent} from './connexion.component';
import {AnnoncesComponent} from './annonces.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import {routers} from './app.routers';
@NgModule({
  imports:      [ BrowserModule,routers ],
  declarations: [ AppComponent ,FirstComponent,IdentificationComponent,ConnexionComponent,PublierComponent,AnnoncesComponent,AboutComponent,ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
