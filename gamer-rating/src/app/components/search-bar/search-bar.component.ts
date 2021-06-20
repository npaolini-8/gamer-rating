import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Game} from '../../Game'
import {HttpClient, HttpHeaders} from '@angular/common/http'

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

    //this.router.navigate(['search', form.value.search]);
    var result = this.http.get(this.apiUrl);
    console.log(result);
    

  }

}
