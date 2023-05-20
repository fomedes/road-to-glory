import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SpanishPaginatorIntl } from 'src/app/Shared/spanish-paginator-intl';
import { PlayerDTO } from 'src/app/players/models/player.dto';
import { PlayerService } from 'src/app/players/services/player.service';
import {
  MarketSettingsDTO,
  SelectedPlayers,
} from '../../models/marketSettings.dto';
import { selectedPlayerDTO } from '../../models/selectedPlayer.dto';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
})
export class MarketListComponent {
  players!: PlayerDTO[];
  marketSettings!: MarketSettingsDTO[];
  selectedPlayers!: SelectedPlayers[];
  auctionedPlayers!: PlayerDTO[];
  playerIds!: number[];
  countdown: string = '';
  marketEnding: boolean = false;

  page: number = 1;
  playerPrices!: any[];
  displayedColumns: string[] = [
    'playerId',
    'avatar',
    'positions',
    'name',
    'price',
    'overall',
    'country',
    'weakFoot',
    'skills',
    'bidAmount',
  ];

  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  totalItems: any;

  dataSource!: MatTableDataSource<PlayerDTO>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private marketService: MarketService,
    private playerService: PlayerService,
    private router: Router,
    private paginatorIntl: MatPaginatorIntl
  ) {
    this.paginatorIntl = new SpanishPaginatorIntl();
    this.loadMarket();
    setInterval(() => {
      this.getCountdown();
    }, 20000);
    setInterval(() => {
      this.getMarketSettings();
    }, 20000);
  }

  private loadMarket(): void {
    let errorResponse: any;

    //load prices
    this.playerService.getPlayerPrices().subscribe((playerPrices) => {
      this.playerPrices = playerPrices[0]; //comunity at position 0
    });

    //get players API
    this.getPlayersApi();

    this.getMarketSettings();

    this.getCountdown();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getPlayersApi(): void {
    let errorResponse: any;

    this.playerService.getPlayers().subscribe(
      (playersList) => {
        this.players = playersList;
      },
      (error: any) => {
        errorResponse = error.error;
      }
    );
  }

  private getMarketSettings() {
    this.marketService.getMarketSettings().subscribe((marketSettings) => {
      this.marketSettings = marketSettings[0];
      this.selectedPlayers = marketSettings[0].selected_players;

      const parsedSelectedPlayers = Array.isArray(this.selectedPlayers)
        ? this.selectedPlayers
        : JSON.parse(this.selectedPlayers);

      this.playerIds = parsedSelectedPlayers.map(
        (player: selectedPlayerDTO) => player.player_id
      );

      this.auctionedPlayers = this.players.filter((obj) => {
        return this.playerIds.includes(obj.id);
      });

      this.totalItems = this.auctionedPlayers.length;
      this.page = 0;
      this.dataSource = new MatTableDataSource<PlayerDTO>(
        this.auctionedPlayers
      );
      this.dataSource.paginator = this.paginator;
    });
  }

  private getCountdown(): void {
    this.marketService.getMarketSettings().subscribe((marketSettings) => {
      this.marketSettings = marketSettings[0];

      const marketEndDate = new Date(marketSettings[0].end_date);
      const currentDate = new Date();
      const timeDifference = marketEndDate.getTime() - currentDate.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      if (minutes < 1) {
        this.marketEnding = true;
      } else {
        this.marketEnding = false;
      }

      this.countdown = `${days}d ${hours}h ${minutes}m`;
    });
  }

  sendBid(): void {
    console.log('Puja realizada');
  }
}
