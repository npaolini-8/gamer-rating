import { Component, OnInit } from '@angular/core';
import {GAMES} from '../../mock-games';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.scss']
})

export class RaterComponent implements OnInit {

  public gamerrating: number = 0;
  public confrating: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.getGamerRating();
    this.getRatingColor(this.gamerrating);
    this.getConfColor(this.confrating);

  }

  getGamerRating(): void {
    
    var total = 0;
    var temp = 0;
    var length = 0;

    for( var game of GAMES) {
      temp = game.percentile * 10;
      length++;
      
      if( temp >= 990) {
        total += temp + 300;
      }
      else if( temp >= 900 ){
        total += temp + 150;
      }
      else total += temp;
    }
    
    if( length > 0) {
      temp = total / length;
    }
    else temp = 0;
    

    if( length >= 4 ){
      temp *= 1.15;
    }

    if( temp > 1000) {
      this.gamerrating = 1000;
    }
    else this.gamerrating = temp;

    this.confrating = length;

    console.log(this.confrating);
    console.log(this.gamerrating);
  }

  getConfRating(): void {
    
  }

  getRatingColor(value: number): string {
    if( value >= 900) {
      return '#b6f8fa';
    }
    else if( value >= 600 ) {
      return '#ebc265';
    }
    else if( value >= 300 ) {
      return '#a0a4b0';
    }
    else return '#8a6541';
  }

  getConfColor(value: number): string {
    if( value >= 8) {
      return '#b6f8fa';
    }
    else if( value >= 3 ) {
      return '#ebc265';
    }
    else if( value >= 2 ) {
      return '#a0a4b0';
    }
    else return '#8a6541';
  }

}
