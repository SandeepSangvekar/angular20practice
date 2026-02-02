import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ChildOfChild } from '../child-of-child/child-of-child';

@Component({
  selector: 'app-child-comp',
  imports: [ChildOfChild],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
  encapsulation:ViewEncapsulation.Emulated,
  // inputs: ['pData']
  outputs:['childEvent']
})
export class ChildComp {
  // pData:any
  childEvent= new EventEmitter();
  sendData(val:any){
    console.log('child value:', val);
    this.childEvent.emit(val)
    
  }
}
