import { Component } from '@angular/core';
import { Numlist } from '../services/numlist';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
  providers: [Numlist]
})
export class Comp1 {
  constructor(private _numlist: Numlist){
    this.list= this._numlist.getList();
  }
  list:number[]= [];
  onAddNum(num: any){
    this._numlist.addNum(num);
    this.list= this._numlist.getList();
    console.log('num: ',this.list);
    
  }
}
