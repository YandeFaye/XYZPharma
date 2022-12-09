import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage = "Invalid Credentials";
  isValid: boolean = false;

  constructor(private route:Router) { }

  ngOnInit(){
  }
  login(){
    if(this.email == "yande85@gmail.com" && this.password == "faye98"){
      this.isValid = false;
      this.route.navigate(['/home']);
    }else{
      this.isValid = true;
    }
  }

}
