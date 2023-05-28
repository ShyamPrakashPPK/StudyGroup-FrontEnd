import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { SignupService } from '../../services/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupObj: any = {
    firstName:"",
    lastName: "",
    email: "",
    password: ""
  };


  constructor(private route: Router, private auth: AuthService,private signup:SignupService) { }

  selectEducation() {
    this.route.navigate(['selectEducation'])
  }

  signUp() {
    let isValid = true;

    if (this.signupObj.firstName === '') {
      alert('Please enter firstname');
      isValid = false;
    }
    if (this.signupObj.lastName === '') {
      alert('Please enter lastname');
      isValid = false;
    }

    if (this.signupObj.password === '') {
      alert('Please enter password');
      isValid = false;
    }

    if (isValid) {
      this.signup.userSignUp(this.signupObj)
      
      // this.auth.signup(this.email, this.password);
    }
  }
}
