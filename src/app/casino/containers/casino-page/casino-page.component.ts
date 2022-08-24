import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs';

import { getJackpots } from '../../store/actions';
import { Jackpot } from '../../models/casino.model';
import { selectJackpotRandom } from '../../store/selectors';

@Component({
  selector: 'app-casino-page',
  templateUrl: './casino-page.component.html',
  styleUrls: ['./casino-page.component.scss'],
})
export class CasinoPageComponent implements OnInit {
  jackpot$ = this.store.pipe(select(selectJackpotRandom));

  jackpot: Jackpot | undefined;
  isOpenNotify = false;
  timer = 10000;

  constructor(private store: Store) {
    this.store.dispatch(getJackpots());
    setInterval(() => {
      this.isOpenNotify = false;
      this.store.dispatch(getJackpots());
    }, this.timer);
  }

  ngOnInit() {
    this.jackpot$
      .pipe(filter((jackpot: Jackpot) => !!jackpot))
      .subscribe((jackpot: any) => {
        this.jackpot = jackpot;
        this.isOpenNotify = true;
      });
  }
}
