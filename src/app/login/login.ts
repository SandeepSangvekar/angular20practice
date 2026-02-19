import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  login(username:any, password:any){
    console.log(username, password);
    if(username=="sandeep" && password=="sandeep@123"){
      sessionStorage.setItem("isLoggedIn", "true");
      alert('Login Successfully!')
    }else{
      sessionStorage.setItem("isLoggedIn", "false");
      // alert('Wrong Username and password!')
    }
  }
}
