import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../../services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  loginObj: any = {
    email: "",
    password: ""
  }

  constructor(private route: Router, private adminSignIn: AdminLoginService) { }


  signIn() {
    let isValid = true;

    if (this.loginObj.email === '') {
      alert('Please enter email');
      isValid = false;
    }

    if (this.loginObj.password === '') {
      alert('Please enter password');
      isValid = false;
    }

    if (isValid) {
      this.adminSignIn.adminSignIn(this.loginObj)
      // this.auth.login(this.email, this.password);
      // this.email = '';
      // this.password = '';
    }
  }


}



