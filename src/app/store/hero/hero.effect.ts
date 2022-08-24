import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import * as HeroActions from './hero.action';
import {HeroesService} from '../../services/heroes/heroes.service';
import {LolHero} from '../../interface/lol-heroes.interface';


@Injectable()
export class HeroEffects {

  getHeroes$ = createEffect(() => this.actions$.pipe(
      ofType(HeroActions.getHero),
      mergeMap(() => this.heroesService.getHeroesData()
        .pipe(
          map((result: {
            characters: Array<LolHero>,
            navBar: Array<any>,
            heroesCategories: Array<any>,
            breadCrumbs: Array<any>,
          }) => {
            console.log('result ', result)
            return HeroActions.getHeroSuccess({heroes: result.characters})
          }),
          catchError((error) => {
            return of(HeroActions.getHeroFail({error}))
          })
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService
  ) {
  }
}
