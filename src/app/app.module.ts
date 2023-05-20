import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './Auth/auth.module';
import { DashboardModule } from './Dashboard/dashboard.module';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { HeaderComponent } from './Shared/components/header/header.component';
import { UserModule } from './User/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketModule } from './market/market.module';
import { PlayerModule } from './players/player.module';

HeaderComponent;
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
    PlayerModule,
    MarketModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AuthModule,
    UserModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
