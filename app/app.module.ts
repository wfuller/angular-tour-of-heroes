//File description: root module: tells Angular how to assemble the app

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {                         //default route
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]) 
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ]
  ,providers: [
    HeroService
  ]
  ,bootstrap:    [ AppComponent ]
})
export class AppModule { }
