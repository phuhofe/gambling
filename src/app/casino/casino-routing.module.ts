import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CasinoPageComponent } from './containers/casino-page/casino-page.component';
import { ListGameComponent } from './containers/list-game/list-game.component';

const routes: Routes = [
  {
    path: '', component: CasinoPageComponent, children: [
      {path: ':id', component: ListGameComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasinoRoutingModule {}
