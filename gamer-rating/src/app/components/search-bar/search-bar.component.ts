import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {GAMES} from '../../mock-games';
import {Game} from '../../Game'
import {HttpClient, HttpHeaders} from '@angular/common/http'
//import {map} from 'rxjs/operators'
//import 'rxjs/add/operator/map'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})


export class SearchBarComponent implements OnInit {

  private dotaUrl = 'https://api.opendota.com/api/players/';
  //64745357 = my dota ID for testing

  private riotKey = '?api_key=RGAPI-fa0d3ddd-4613-4ffb-9c9e-18702c2eaf67';
  private riotSumUrl = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
  private tftUrl = 'https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/'
  private lolUrl = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/';

  private awsRiotID = 'https://3u8cel36n9.execute-api.us-east-2.amazonaws.com/rgapi/summoner/';

  private trnAPI = '40403e16-8c31-4cfc-888a-607603823b23';

  private csgoURL = 'https://public-api.tracker.gg/v2/csgo/standard/profile/pc/';

  private gamelist: Game[] = [];

  //private router: Router was from constructor from tutorial 1

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //to be switched to local storage
    //sessionStorage.setItem('gamelist', "");
  }

  onSubmit(form: NgForm) {

    console.log("test");

    if((<HTMLSelectElement>document.getElementById('gameinput')).value === 'cs-go' && (<HTMLSelectElement>document.getElementById('idinput')).value === 'testy') {

    }

    else if ( (<HTMLSelectElement>document.getElementById('gameinput')).value === 'dota-2' ) {
      //console.log('works');

      var dotaindex = -1;

      for( var listed of GAMES) {
        if( listed.gamename === 'Dota 2') {

          dotaindex = GAMES.indexOf(listed);

        }
      }

      this.http.get<JSON>(this.dotaUrl + (<HTMLSelectElement>document.getElementById('idinput')).value ).subscribe(
        response => {
          console.log(response);
          const gamedata = JSON.parse(JSON.stringify(response));
          console.log(gamedata.profile.personaname);

          console.log(Math.floor((gamedata.rank_tier)/10));

          var rankDigit = Math.floor((gamedata.rank_tier)/10);
          var rankStr: string = '';
          switch(rankDigit) {
           case 1: rankStr = 'Herald'; break;
           case 2: rankStr = 'Guardian'; break;
           case 3: rankStr = 'Crusader'; break;
           case 4: rankStr = 'Archon'; break;
           case 5: rankStr = 'Legend'; break;
           case 6: rankStr = 'Ancient'; break;
           case 7: rankStr = 'Divine'; break;
           case 8: rankStr = 'Immortal'; break;
          }

         if ( rankDigit != 8 ) {
          rankStr += ' ' + String(74 % 10);
          }
         console.log(rankStr);

         var rankPer: number = 0;

         switch(rankStr) {
           case 'Herald 1': rankPer = 0; break;
           case 'Herald 2': rankPer = 1.1; break;
           case 'Herald 3': rankPer = 2.3; break;
           case 'Herald 4': rankPer = 4; break;
           case 'Herald 5': rankPer = 5.9; break;
           case 'Guardian 1': rankPer = 8.1; break;
           case 'Guardian 2': rankPer = 10.6; break;
           case 'Guardian 3': rankPer = 13.3; break;
           case 'Guardian 4': rankPer = 16.4; break;
           case 'Guardian 5': rankPer = 19.8; break;
           case 'Crusader 1': rankPer = 23.5; break;
           case 'Crusader 2': rankPer = 27.5; break;
           case 'Crusader 3': rankPer = 31.6; break;
           case 'Crusader 4': rankPer = 36; break;
           case 'Crusader 5': rankPer = 40.5; break;
           case 'Archon 1': rankPer = 45.3; break;
           case 'Archon 2': rankPer = 50.1; break;
           case 'Archon 3': rankPer = 54.9; break;
           case 'Archon 4': rankPer = 59.5; break;
           case 'Archon 5': rankPer = 64; break;
           case 'Legend 1': rankPer = 68.5; break;
           case 'Legend 2': rankPer = 72.6; break;
           case 'Legend 3': rankPer = 76.4; break;
           case 'Legend 4': rankPer = 79.8; break;
           case 'Legend 5': rankPer = 82.8; break;
           case 'Ancient 1': rankPer = 85.7; break;
           case 'Ancient 2': rankPer = 88.1; break;
           case 'Ancient 3': rankPer = 90.1; break;
           case 'Ancient 4': rankPer = 91.8; break;
           case 'Ancient 5': rankPer = 93.2; break;
           case 'Divine 1': rankPer = 94.8; break;
           case 'Divine 2': rankPer = 96; break;
           case 'Divine 3': rankPer = 97; break;
           case 'Divine 4': rankPer = 97.7; break;
           case 'Divine 5': rankPer = 98.2; break;
           case 'Immortal': rankPer = 100; break;
           
         }
  
          //this.gamelist.push( {
        if( dotaindex < 0 ) {
          dotaindex = GAMES.length;
        }
          GAMES[dotaindex] = {
            name: gamedata.profile.personaname,
            gamename: 'Dota 2',
            rank: rankStr,
            percentile: rankPer,
            platform: 'pc',
            image: '../../../assets/images/logos/dota-2.png'
          };
  
        } 
      );
    }/*
    else if ( (<HTMLSelectElement>document.getElementById('gameinput')).value === 'tft' ) {

      const testURL = 'https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/_n7jxTi5IReAxaHwVVNGuS8C58-0pltphi2juWy9fG8f6Ko';
     

      const reqHeaders = new HttpHeaders();
      //reqHeaders.set("X-Riot-Token", "RGAPI-fa0d3ddd-4613-4ffb-9c9e-18702c2eaf67");
      //reqHeaders.set("Accept", "*/ /*");
      reqHeaders.set("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36")
      reqHeaders.set("Content-Type","application/json");
      reqHeaders.set("Access-Control-Allow-Origin","*");
      reqHeaders.set("Accept","application/json");
      reqHeaders.set("Accept-Language","en-US,en;q=0.9");
      reqHeaders.set("Accept-Charset","application/x-www-form-urlencoded; charset=UTF-8");
      reqHeaders.set("Origin","https://developer.riotgames.com");
      reqHeaders.set("X-Riot-Token","RGAPI-fa0d3ddd-4613-4ffb-9c9e-18702c2eaf67");

      const riotHeader = { "Access-Control-Allow-Origin": "x-requested-with",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "OPTIONS,GET",
      "Content-Type": "application/json"};
      //, {headers: riotHeader} {headers: testHeader} , {headers: reqHeaders}

      console.log(this.awsRiotID + 'na1/' + (<HTMLSelectElement>document.getElementById('idinput')).value);
      //this.awsRiotID + 'na1/' + (<HTMLSelectElement>document.getElementById('idinput')).value testURL

      //this.http.get<JSON>(testURL, {headers: reqHeaders}).subscribe(
        this.http.get<JSON>("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/procarbine?api_key=RGAPI-fa0d3ddd-4613-4ffb-9c9e-18702c2eaf67").subscribe(
        
        response => {

          console.log(response);

        }
      );
    }
    else if ( (<HTMLSelectElement>document.getElementById('gameinput')).value === 'csgo' ) {
      const csHeader = {'Content-Type':'application/json','TRN-Api-Key':this.trnAPI};

      this.http.get<JSON>(this.csgoURL +  (<HTMLSelectElement>document.getElementById('idinput')).value).subscribe(
        response => {

          console.log(response);

        }
      );
    } */
    

  }

  getDota(): void {

  }

}
