import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { containers } from './containers';
import { CasinoService } from './service/casino.service';
import { CasinoRoutingModule } from './casino-routing.module';
import { components } from './components';

@NgModule({
  declarations: [containers, components],
  imports: [
    CommonModule,
    CasinoRoutingModule,
  ],
  providers: [CasinoService],
})
export class CasinoModule {}
