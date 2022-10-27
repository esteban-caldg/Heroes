import { Component, OnInit } from '@angular/core';
import { HEROESDB } from '../dataBase/heroesData';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService,
              private MessageService:MessageService) { }

  getHeroes(): void{
    /* this.heroes = this.heroService.getHeroes();  <-- asyncronous call*/
    this.heroService.getHeroes().subscribe(heroes =>this.heroes=heroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.MessageService.add(`HeroesComponent: Selected hero id=${hero.id}`); /*ojo con las commas simples deben ir*/
  }
}
