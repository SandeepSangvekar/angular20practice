import { Component } from '@angular/core';
import { Numlist } from '../services/numlist';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
  providers: [Numlist]
})
export class Comp2 {
  list:number[] = []
  constructor(private _numlist: Numlist){
    this.list = this._numlist.getList();
  }
  onAddNum(num: any){
    this._numlist.addNum(num);
    this.list = this._numlist.getList();
  }
}
