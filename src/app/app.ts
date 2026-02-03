import { Component, HostListener, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee/employee';
import { ChildComp } from './child-comp/child-comp';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomePipe } from './welcome-pipe';
import { LimitwordPipe } from './limitword-pipe';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [Employee, ChildComp, CommonModule, FormsModule, WelcomePipe, LowerCasePipe, LimitwordPipe], 
  templateUrl: './app.html',
  // template: '<h1>Hello, Sandeep....!</h1>',
  styleUrl: './app.css', // to use external css
  // styles:'h1{background-color:yellow}', // use inline css
  // styleUrls: ['./app.css', './tests.css'], // use multiple external css
  preserveWhitespaces: true,
  encapsulation:ViewEncapsulation.ShadowDom
})
export class App {
  protected readonly title = signal('angular20practice');
  msg2: any;
  // onClick(){
  //   alert('Hello!')
  // }
  // @HostListener('click')
  // display(){
  //   alert('How are you!')
  // }
  show(){
    alert('You have clicked somewhere!')
  }
  cData:any;
  isValid: boolean = true;
  age = 0;
  name: string = 'rohit gaikwad';
  employees:any = [
    {id:1, name: 'Atharva Harmalkar', country: 'India'},
    {id:2, name: 'Sarvesh Harmalkar', country: 'USA'},
    {id:3, name: 'Soham Kudalkar', country: 'Australia'},
    {id:4, name: 'Rahul Gaikwad', country:'Africa'},
    {id:5, name: 'Amol Ghadge', country:'India'},
    {id:6, name: 'Avinash More', country:'Dubai'},
    {id:7, name: 'Kunal Bhalerao' , country: 'India'},
  ];
  // employees:any;
  country = 'India';
  fontSize = '15';
  // company={
  //   name: 'Orbit Techsol',
  //   city: 'Pune',
  //   state: 'Maharashatra',
  //   country: 'India'
  // }
  company:any;
  num1= 100;
  num2= 200;
  col= 2;
  isBold: boolean = true;
  isItalic: boolean = false;
  fontSize2 = '40';
  classApply = 'boldClass italicClass'
  str = "<h3>Hello World!</h2>"
  imgPath= 'profile.png';
  currentValue: boolean = true;
  msg:any;
  msg3='Hello dear!';
  demoTxt="Hello Atharva, How are you doing"
  titleTxt= "This is a Title"
  jsonData = {name:'Ajinkya Manurkar', role: 'UI/UX designer', gender: 'Male'}
  num = '12.677972';
  curr = 12.20;
  currentDate = new Date();
  strValue ="Angular is a TypeScript-based, open-source front-end framework maintained by Google for building dynamic, high-performance, and scalable single-page web applications (SPAs). It utilizes a component-based architecture, TypeScript for code structure, and features like two-way data binding and Dependency Injection to simplify development for enterprise-level applications.";
  strValue2 = "Hello this is an dummy text"
  getData(val:string){
    this.cData = Number(val);
    console.log(this.cData);
  }
  onChange(val:any){
    this.isValid = val;
  }
  getAdult(val:any){
    this.age = val;
    console.log('age value:',this.age);
  }
  refreshData(){
    this.employees = [
      {id:1, name: 'Atharva Harmalkar'},
      {id:2, name: 'Sarvesh Harmalkar'},
      {id:3, name: 'Soham Kudalkar'},
      {id:4, name: 'Rahul Gaikwad'},
      {id:5, name: 'Amol Ghadge'},
      {id:6, name: 'Avinash More'},
      {id:7, name: 'Kunal Bhalerao'},
      {id:8, name: 'Akshay Raut'},
    ];
  }
  getColor(country:any){
    switch (country) {
      case 'India':
        return 'orange';
      case 'USA':
        return 'red';
      case 'Australia':
        return 'blue';
      case 'Africa':
        return 'green';
      case 'Dubai':
        return 'gray';
      default:
        return 'skyblue';
    }
  }
  addCssStyle(){
    let cssStyle = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize2
    } 
    return cssStyle;
  }
  addCssClasses(){
    let cssClasses={
      'boldClass':this.isBold,
      'italicClass': this.isItalic
    }
    return cssClasses;
  }
  disableEnable(){
    this.currentValue = !this.currentValue;
  }
  click1(){
    console.log('click1 event fired!');
  }
  click2(){
    console.log('click2 event fired!');
  }
  keyUp(){
    console.log('keyup event fired!');
  }
  keyDown(){
    console.log('keydown event fired!');
  }
  inputEvent(){
    console.log('input event fired!');
  }
  sendMsg(val:any){
    this.msg = val;
    this.msg2 = val;
  }
  sendMsg2(val: any){
    this.msg3 = val;
  }
}
