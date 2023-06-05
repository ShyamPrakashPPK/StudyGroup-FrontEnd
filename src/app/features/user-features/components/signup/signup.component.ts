import { Component, KeyValueDiffers } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { SignupService } from '../../services/signup.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordChecker } from 'src/app/shared/password-checker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  myForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private route: Router, private auth: AuthService, private signup: SignupService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: passwordChecker('password', 'confirmPassword')
    })
  }

  get r() {
    return this.myForm.controls
  }


  selectEducation() {
    this.route.navigate(['selectEducation'])
  }


  signUp() {
    console.log("....");
    if (this.myForm.valid) {
      const newUser = {
        firstName: this.r['first_name'].value,
        lastName: this.r['last_name'].value,
        email: this.r['email_address'].value,
        password: this.r['password'].value
      }
      this.signup.userSignUp(newUser)
    } else {
      this.myForm.markAllAsTouched();
    }





    // let isValid = true;

    // if (this.signupObj.firstName === '') {
    //   alert('Please enter firstname');
    //   isValid = false;
    // }
    // if (this.signupObj.lastName === '') {
    //   alert('Please enter lastname');
    //   isValid = false;
    // }

    // if (this.signupObj.password === '') {
    //   alert('Please enter password');
    //   isValid = false;
    // }

    // if (isValid) {
    //   this.signup.userSignUp(this.signupObj)
    //   // this.auth.signup(this.email, this.password);
    // }
  }
}
