import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDTO } from '../../models/player.dto';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent {
  players!: PlayerDTO[];
  constructor(private playerService: PlayerService, private router: Router) {
    this.loadPlayers();
  }

  private loadPlayers(): void {
    let errorResponse: any;

    this.playerService.getPlayers().subscribe(
      (playersResult) => {
        this.players = playersResult;
      },
      (error: any) => {
        errorResponse = error.error;
      }
    );
  }
}
