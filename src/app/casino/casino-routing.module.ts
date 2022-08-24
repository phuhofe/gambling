import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ListGameComponent } from './containers/list-game/list-game.component';

const routes: Routes = [
  { path: 'top', component: ListGameComponent },
  { path: 'slots', component: ListGameComponent },
  { path: 'new', component: ListGameComponent },
  { path: 'classic', component: ListGameComponent },
  { path: 'poker', component: ListGameComponent },
  { path: 'roulette', component: ListGameComponent },
  { path: 'blackjack', component: ListGameComponent },
  { path: 'fun', component: ListGameComponent },
  { path: 'virtual', component: ListGameComponent },
  { path: 'ball', component: ListGameComponent },


  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasinoRoutingModule {}
