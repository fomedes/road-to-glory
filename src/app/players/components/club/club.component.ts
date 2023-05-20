import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PlayerDTO } from '../../models/player.dto';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss'],
})
export class ClubComponent {
  players!: PlayerDTO[];
  clubPlayers: any[] = [];
  playerIds!: number[];

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

  dataSource!: MatTableDataSource<PlayerDTO>;

  constructor(private playerService: PlayerService, private router: Router) {
    this.loadClub();
  }

  private loadClub(): void {
    let errorResponse: any;

    //load prices
    this.playerService.getPlayerPrices().subscribe((playerPrices) => {
      this.playerPrices = playerPrices[0]; //comunity at position 0
    });

    this.getClubPlayers();
  }

  private getClubPlayers() {
    let errorResponse: any;

    this.playerIds = [41236, 158023];

    for (let id of this.playerIds) {
      this.playerService.getPlayerById(id).subscribe(
        (player) => {
          console.log(id);
          console.log(player);
          this.clubPlayers.push(player);
        },
        (error: any) => {
          errorResponse = error.error;
        }
      );
    }
    this.dataSource = new MatTableDataSource<PlayerDTO>(this.clubPlayers);
    console.log(this.dataSource);
  }

  sellPlayer(): void {
    console.log('Jugador vendido');
  }

  transferable(): void {
    console.log('Jugador añadido a transferibles');
  }
}