import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/Auth/reducers';
import { logout } from '../../../Auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showAuthSection: boolean;
  showNoAuthSection: boolean;

  constructor(private router: Router, private store: Store<AuthState>) {
    this.showAuthSection = false;
    this.showNoAuthSection = true;
  }

  ngOnInit(): void {
    this.store.select('isLoggedIn').subscribe((auth: boolean) => {
      this.showAuthSection = auth;
      this.showNoAuthSection = !auth;
    });
  }

  login(): void {
    this.router.navigateByUrl('login');
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.store.dispatch(logout());
    this.router.navigateByUrl('login');
  }

  register(): void {
    this.router.navigateByUrl('register');
  }

  playerList(): void {
    this.router.navigateByUrl('players');
  }

  market(): void {
    this.router.navigateByUrl('market');
  }

  dashboard(): void {
    this.router.navigateByUrl('dashboard');
  }

  club(): void {
    this.router.navigateByUrl('club');
  }
}
