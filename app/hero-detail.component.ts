import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero.js';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent { 
    constructor(
        private heroService: HeroService, 
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))  //the switchMap operator maps the id in the observable route parameters to a new Observable, the result of the HeroService.getHero method.
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
    
    //@Input()    hero: Hero;
}