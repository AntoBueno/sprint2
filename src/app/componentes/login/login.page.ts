import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
 
  onSubmitLogin()
  {
    console.log('estas en la funcion');
    this.authService.dologin(this.email, this.password);

  }
}
