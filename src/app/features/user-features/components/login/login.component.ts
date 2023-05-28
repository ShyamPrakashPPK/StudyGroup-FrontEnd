import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginObj: any = {
    email: "",
    password:""
  }

  constructor(private route: Router, private auth: AuthService,private userLogin:LoginService ) { }


  signupredirect() {
    this.route.navigate(['signup'])
  }
  login() {
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
      this.userLogin.login(this.loginObj)
      // this.auth.login(this.email, this.password);
      // this.email = '';
      // this.password = '';
    }
  }
  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
