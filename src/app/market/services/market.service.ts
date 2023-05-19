import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  private urlPlayerApi: string;
  private urlPlayerPricesApi: string;
  private urlMarketApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'player';
    this.urlPlayerApi = 'http://127.0.0.1:8000/api/' + this.controller;
    this.urlPlayerPricesApi = 'http://127.0.0.1:8000/api/prices';
    this.urlMarketApi = 'http://127.0.0.1:8000/api/market';
  }

  getMarketSettings(): Observable<any[]> {
    return this.http.get<any[]>(this.urlMarketApi);
  }
}
