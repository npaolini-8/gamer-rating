import { Component, OnInit } from '@angular/core';
//import {GAMES} from '../../mock-games';
import {Game} from '../../Game';
import {GameService} from '../../services/game.service'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => (this.games = games) );
  }

}
