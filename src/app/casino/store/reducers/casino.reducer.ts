import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as CasinoActions from '../actions';
import { Game } from '../../models/casino.model';

export interface CasinoState {
  games: Array<Game>;
  isLoading: boolean;
}

export const initialState: CasinoState = {
  games: [],
  isLoading: false,
};

export const casinoReducer = createReducer(
  initialState,

  on(CasinoActions.getGames, (state) => {
    return { ...state, isLoading: true };
  }),

  on(CasinoActions.getGamesSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      games: action.games,
    };
  }),

  on(CasinoActions.getGamesFail, (state) => {
    return { ...state, isLoading: false };
  })
);
