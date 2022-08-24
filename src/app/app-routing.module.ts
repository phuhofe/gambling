import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LolHeroesComponent } from './lol-heroes/lol-heroes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // { path: '', redirectTo: 'champions', pathMatch: 'full' },
      { path: 'champions', component: LolHeroesComponent     },
      // { path: 'champions/:id', component: HeroDetailComponent    },
      {
        path: '',
        loadChildren: () => import('./casino/casino.module').then(m => m.CasinoModule)
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
