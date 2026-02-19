import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comp5',
  imports: [],
  templateUrl: './comp5.html',
  styleUrl: './comp5.css',
})
export class Comp5 {
  constructor(private cookie_: CookieService){

  }
  setData(){
    this.cookie_.set('cookieName', 'testCookie');
  }
}
