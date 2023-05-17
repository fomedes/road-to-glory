import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { PlayerListComponent } from './components/player-list/player-list.component';

@NgModule({
  declarations: [PlayerItemComponent, PlayerListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
})
export class PlayerModule {}
