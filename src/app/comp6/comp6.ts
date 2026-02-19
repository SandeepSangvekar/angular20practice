import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comp6',
  imports: [],
  templateUrl: './comp6.html',
  styleUrl: './comp6.css',
})
export class Comp6 {
  constructor(private _cookie:CookieService){

  }
  getData(){
    console.log( this._cookie.get('cookieID')); // to get specific key data
    console.log(this._cookie.get('cookieName')); // to get specific key data
    // console.log('cookie Data:', this._cookie.getAll()); // to get all key data in object
    // console.log('cookie Data:', JSON.stringify(this._cookie.getAll()));
  }
  delete(){
    this._cookie.delete('cookieName');
  }
  deleteAll(){
    this._cookie.deleteAll();
  }
}
