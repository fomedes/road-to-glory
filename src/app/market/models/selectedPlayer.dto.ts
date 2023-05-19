export class selectedPlayerDTO {
  player_id: number;
  biding_club: string;
  biding_amount: number;
  biding_date: Date | null;

  constructor(
    player_id: number,
    biding_club: string,
    biding_amount: number,
    biding_date: Date | null
  ) {
    this.player_id = player_id;
    this.biding_club = biding_club;
    this.biding_amount = biding_amount;
    this.biding_date = biding_date;
  }
}
