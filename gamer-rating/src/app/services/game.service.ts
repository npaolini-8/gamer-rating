import { Injectable } from '@angular/core';
import {GAMES} from '../mock-games';
import {Game} from '../Game';
import {Observable, of} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'https://api.opendota.com/api/players/64745357'

  constructor(private http:HttpClient) { }

  getGames(): Observable<Game[]> {
    
    const games = of(GAMES);
    return games;
  }
}
