import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketListComponent } from './market/components/market-list/market-list.component';
import { PlayerItemComponent } from './players/components/player-item/player-item.component';
import { PlayerListComponent } from './players/components/player-list/player-list.component';

const routes: Routes = [
  /*
  {
    path: '',
    component: AppComponent,
  },
  */
  {
    path: 'players',
    component: PlayerListComponent,
  },
  {
    path: 'players/:id',
    component: PlayerItemComponent,
  },
  {
    path: 'market',
    component: MarketListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
