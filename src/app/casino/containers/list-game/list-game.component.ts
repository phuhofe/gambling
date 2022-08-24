import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { combineLatest, filter } from 'rxjs';

import { getGames } from '../../store/actions';
import { selectGames,selectIsLoading } from '../../store/selectors';
import { CasinoService } from '../../service/casino.service';
import { Game } from '../../models/casino.model';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss'],
})
export class ListGameComponent implements OnInit {
  isLoading$ = this.store.pipe(select(selectIsLoading));
  games$ = this.store.pipe(select(selectGames));

  gamesOfCategory: Array<Game> | undefined;
  
  categorySelected = 'top';
  constructor(
    private store: Store,
    private casinoService: CasinoService,
    private router: Router,
  ) {
    this.store.dispatch(getGames());
    const url = this.router.url.split('/');
    this.casinoService.selectedCategory(url[1]);
  }

  ngOnInit(): void {
    this.subscriptionData();
  }

  subscriptionData() {
    combineLatest(this.games$, this.casinoService.category$)
      .pipe(filter(([games, category]) => games !== null && category !== null))
      .subscribe(([games, category]) => {
        this.gamesOfCategory = games.filter((game: Game) =>
          game.categories.includes(category)
        );
        // console.log('arraySelected', this.gamesOfCategory);
      });
  }
}
