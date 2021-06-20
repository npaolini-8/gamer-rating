import { Component, OnInit } from '@angular/core';
import {GAMES} from '../../mock-games';
import {Game} from '../../Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[] = GAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
