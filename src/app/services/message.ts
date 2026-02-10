import { Injectable } from '@angular/core';
import { Othermessage } from './othermessage';

@Injectable({
  providedIn: 'root',
})
export class Message {
  constructor(private _otherMessage: Othermessage){

  }
  private message = "This message received in service file";
  getMsg(){
    return this.message;
  }
}
