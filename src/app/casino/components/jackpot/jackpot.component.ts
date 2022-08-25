import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, tap, timer, interval, delayWhen } from 'rxjs';

import { Jackpot } from '../../models/casino.model';
import { getJackpots } from '../../store/actions';
import { selectJackpotRandom } from '../../store/selectors';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.scss'],
})
export class JackpotComponent implements OnInit {

  jackpot$ = this.store.pipe(
    select(selectJackpotRandom),
    filter((jackpot: Jackpot) => !!jackpot),
    tap(() => (this.isOpenNotify = true))
  );

  isOpenNotify = false;
  timer = 5000;

  delayForFiveSeconds = () => timer(3000);

  constructor(private store: Store) {}

  ngOnInit() {
    this.showRandomJackpot();
  }

  showRandomJackpot() {
    interval(this.timer)
      .pipe(delayWhen(this.delayForFiveSeconds))
      .subscribe(() => {
        this.isOpenNotify = false;
        this.store.dispatch(getJackpots());
        this.isOpenNotify = false;
      });
  }
}
