import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first.component';
import {IdentificationComponent} from './identification.component';
import {PublierComponent} from './publier.component';
import {ConnexionComponent} from './connexion.component';
import {AnnoncesComponent} from './annonces.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
import { AppModule } from './app.module';

const routes: Routes = [
{
  path:'',
  component: FirstComponent
},
{
  path:'#contact',
  component: ContactComponent
},
{
  path:'#Identification',
  component: IdentificationComponent
},
{
  path:'#annonce',
  component: PublierComponent
},
{
    path:'#Connexion',
    component: ConnexionComponent
  },
  {
    path:'#Annonces',
    component: AnnoncesComponent
  },
  {
    path:'#about',
    component: AboutComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routers: ModuleWithProviders=RouterModule.forRoot(routes);