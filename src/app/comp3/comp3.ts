import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3',
  imports: [],
  templateUrl: './comp3.html',
  styleUrl: './comp3.css',
})
export class Comp3 {
  company ={
    name:'Orbit Techsol',
    state: 'Maharashatra',
    city: 'Pune',
    country: 'India'
  }
  setData(){
    localStorage.setItem('custoID', 'cust002');
    localStorage.setItem('companyData', JSON.stringify(this.company))
    // need to send data in string so we used JSON.stringify
  }
}
