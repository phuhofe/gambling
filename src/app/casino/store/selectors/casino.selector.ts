import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers';

export const selectCasinoState = createFeatureSelector<fromReducer.CasinoState>('casino')

export const selectGames = createSelector(
  selectCasinoState,
  (state) => state.games
);
export const selectIsLoading = createSelector(
  selectCasinoState,
  (state) => state.isLoading
);
