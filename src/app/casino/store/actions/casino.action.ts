import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/casino.model';

export const getGames = createAction('[CASINO] Get Games');

export const getGamesSuccess = createAction(
  '[CASINO] Get Games Success',
  props<{ games: Array<Game> }>()
);

export const getGamesFail = createAction(
  '[CASINO] Get Games Fail',
  props<{ error: any }>()
);
