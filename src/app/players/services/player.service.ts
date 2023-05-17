import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerDTO } from '../models/player.dto';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private urlPlayerApi: string;
  private urlPlayerPricesApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'players';
    this.urlPlayerApi = 'http://127.0.0.1:8000/api/' + this.controller;
    this.urlPlayerPricesApi = 'http://127.0.0.1:8000/api/prices';
  }

  getPlayers(): Observable<PlayerDTO[]> {
    return this.http.get<PlayerDTO[]>(this.urlPlayerApi);
  }

  getPlayerById(playerId: number): Observable<PlayerDTO[]> {
    return this.http.get<PlayerDTO[]>(this.urlPlayerApi + '/' + playerId);
  }

  getPlayerPrices(): Observable<any[]> {
    return this.http.get<any[]>(this.urlPlayerPricesApi);
  }
}
