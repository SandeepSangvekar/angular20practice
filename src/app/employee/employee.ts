import { Component } from '@angular/core';
class student{
  constructor(){
   console.log('Student constructor called!')
 }
}
class demo{
  constructor(){
    console.log('demo constructor called!')
  }
}
@Component({
  selector: 'app-employee', // using element
  // selector: '.app-employee', //using class
  // selector: '[app-employee]',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
  providers:[student, demo]
})
export class Employee {
  constructor(private _student:student, private _demo: demo){
    console.log('Employee constructor called!')
  }
}

 
