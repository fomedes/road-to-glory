export class MarketSettingsDTO {
  community: number;
  minimum_overall: number;
  maximum_overall: number;
  market_duration: number;
  start_date: Date;
  end_date: Date;
  selected_players: SelectedPlayers[];
  constructor(
    community: number,
    minimum_overall: number,
    maximum_overall: number,
    market_duration: number,
    start_date: Date,
    end_date: Date,
    selected_players: SelectedPlayers[]
  ) {
    this.community = community;
    this.minimum_overall = minimum_overall;
    this.maximum_overall = maximum_overall;
    this.market_duration = market_duration;
    this.start_date = start_date;
    this.end_date = end_date;
    this.selected_players = selected_players;
  }
}

export class SelectedPlayers {
  player_id: number;
  biding_club: string;
  biding_amount: number;
  biding_date: null;

  constructor(
    player_id: number,
    biding_club: string,
    biding_amount: number,
    biding_date: null
  ) {
    this.player_id = player_id;
    this.biding_club = biding_club;
    this.biding_amount = biding_amount;
    this.biding_date = biding_date;
  }
}
