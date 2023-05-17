import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MarketListComponent } from './components/market-list/market-list.component';

@NgModule({
  declarations: [MarketListComponent],
  imports: [CommonModule, MatPaginatorModule],
})
export class MarketModule {}
