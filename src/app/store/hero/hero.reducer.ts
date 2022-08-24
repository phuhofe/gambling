import {createReducer, on} from '@ngrx/store';
import * as HeroActions from './hero.action';
import {LolHero} from '../../interface/lol-heroes.interface';

export interface HeroState {
  heroes: Array<LolHero>;
  skins: any;
}

export const initialState: HeroState = {
  heroes: [],
  skins: undefined
}

export const heroesReducer = createReducer(
  initialState,

  on(HeroActions.getHero, state => {
    return {...state}
  }),

  on(HeroActions.getHeroSuccess, (state, action) => {
    return {
      ...state,
      heroes: action.heroes
    }
  }),

  on(HeroActions.getHeroFail, state => {
    return {...state}
  }),
)

