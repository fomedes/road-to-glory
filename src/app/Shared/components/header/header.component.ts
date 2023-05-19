import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  playerList(): void {
    this.router.navigateByUrl('players');
  }

  market(): void {
    this.router.navigateByUrl('market');
  }
}
