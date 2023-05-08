import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
