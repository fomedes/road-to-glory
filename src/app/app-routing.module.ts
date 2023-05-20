import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { DashboardComponent } from './Dashboard/components/dashboard/dashboard.component';
import { ResultsComponent } from './Dashboard/components/results/results.component';
import { RegisterComponent } from './User/components/register/register.component';
import { AppComponent } from './app.component';
import { MarketListComponent } from './market/components/market-list/market-list.component';
import { PlayerItemComponent } from './players/components/player-item/player-item.component';
import { PlayerListComponent } from './players/components/player-list/player-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },

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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
