import {createAction, props} from '@ngrx/store';
import {LolHero} from '../../interface/lol-heroes.interface';

export const getHero = createAction('[HERO] Get Heroes');

export const getHeroSuccess = createAction('[HERO] Get Heroes Success',
  props<{ heroes: Array<LolHero> }>()
)

export const getHeroFail = createAction('[HERO] Get Heroes Fail',
  props<{ error: any }>()
)
