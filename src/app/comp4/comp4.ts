import { Component } from '@angular/core';

@Component({
  selector: 'app-comp4',
  imports: [],
  templateUrl: './comp4.html',
  styleUrl: './comp4.css',
})
export class Comp4 {
  getData(){
    console.log(localStorage.getItem('custoID'));
    console.log(sessionStorage.getItem('employeeID'));
    console.log(JSON.parse(localStorage.getItem('companyData')!)); //1st way
    // need to parse so we will get data in object
    const parseData = JSON.parse(localStorage.getItem('companyData') || '{}') //2nd way
    console.log(parseData)
    console.log(localStorage.length)
    
  }
  deleteItem(){
    localStorage.removeItem('custoID');
  }
  deleteAll(){
    localStorage.clear();
  }
}
