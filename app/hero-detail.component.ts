import { Component, Input } from '@angular/core';

import { Hero } from './hero.js';

@Component({
    selector: 'my-hero-detail',
    //templateUrl: 'feature.component.html'
    template:`
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
    `
})

export class HeroDetailComponent { 
    @Input()
    hero: Hero;
}