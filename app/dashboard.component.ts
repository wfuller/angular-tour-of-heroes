import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];   //define 'heroes' property as an array of class 'Hero' 

    constructor(private HeroService: HeroService) { } //inject the 'HeroService' (a singleton instance of this created in AppModule and available to all components of our app) and hold it in a private 'heroService' field

    ngOnInit(): void {
        this.HeroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));  //call the service to get a list of heroes in the ngOnInit for this component
    }
}