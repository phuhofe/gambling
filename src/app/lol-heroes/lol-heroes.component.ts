import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../store/reducer';
import { getHero } from '../store/hero/hero.action';
import { selectHeroes } from '../store/hero/hero.selector';

import { Navbar } from '../interface/nav-bar.interface';
import { BreadCrumbs, HeroesType, LolHero } from '../interface/lol-heroes.interface';

@Component({
  selector: 'app-lol-heroes',
  templateUrl: './lol-heroes.component.html',
  styleUrls: ['./lol-heroes.component.scss'],
})
export class LolHeroesComponent implements OnInit {
  characters: Array<LolHero> = [];
  navbarData: Array<Navbar> = [];
  heroesCategories: Array<HeroesType> = [];
  breadCrumbs: Array<BreadCrumbs> = [];
  
  isShowingAllHeroTypes = false;
  heroes$ = this.store.pipe(select(selectHeroes));

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    this.store.dispatch(getHero());
  }
}
