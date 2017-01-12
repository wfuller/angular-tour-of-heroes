//File description: heroes component (formerly the root component)

import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { Hero }        from './hero.js';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']

  //,providers: [HeroService] 
})

export class HeroesComponent implements OnInit {
  heroes:  Hero[];      //declare property 'heroes' and assign it the value of the HEROES variable; TypeScript will infer from HEROES that the type of the new variable is an array of type 'Hero' (i.e., HEREOS: Hero[] = [ {..}, {..}, {..} ] -as declared at the top of this file)
  selectedHero: Hero;   //declare property 'selectedHero' of type 'Hero'

  constructor(private heroService: HeroService, 
              private router: Router) { }

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes );
    //this.heroService.getHeroesSlowly().then( heroes => this.heroes = heroes );
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}