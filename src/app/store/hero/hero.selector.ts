import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './hero.reducer';

export const selectHeroesState = createFeatureSelector<fromReducer.HeroState>('heroes')

export const selectHeroes = createSelector(
  selectHeroesState,
  (state) => state.heroes
);
