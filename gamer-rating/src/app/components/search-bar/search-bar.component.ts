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

  private apiUrl = 'https://api.opendota.com/api/players/64745357'
  private gamelist: Game[] = [];

  //private router: Router was from constructor from tutorial 1

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //to be switched to local storage
    //sessionStorage.setItem('gamelist', "");
  }

  onSubmit(form: NgForm) {

    console.log("test");
   // var gamedata;

    //this.router.navigate(['search', form.value.search]); ,{responseType: 'json'}
    if ( (<HTMLSelectElement>document.getElementById('gameinput')).value === 'dota-2' ) {
      //console.log('works');
    }
    this.http.get<JSON>(this.apiUrl).subscribe(
      response => {
        console.log(response);
        const gamedata = JSON.parse(JSON.stringify(response));
        console.log(gamedata.profile.personaname);

        //this.gamelist.push( {
        GAMES.push( {
          name: gamedata.profile.personaname,
          gamename: 'Dota 2',
          rank: 'test',
          percentile: 97.7,
          platform: 'pc',
          image: 'https://cdn.windowsreport.com/wp-content/uploads/2017/01/dota-2-cant-connect-to-game-server-886x590.png'
        })

      } 
    );

    //result.map


    //var resultObj = JSON.parse(result);
    //console.log( result );
    

  }

  getDota(): void {

  }

}
