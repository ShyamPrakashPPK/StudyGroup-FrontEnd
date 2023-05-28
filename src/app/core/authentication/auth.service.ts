import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider, GithubAuthProvider,FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }
  
  //login method

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      
      localStorage.setItem('usertoken', 'true');
      this.router.navigate(['/global-study-room'])
    }, err => {
      alert('something went wrong');
      this.router.navigate(['/login'])
    })
  }


  //signup
  signup( email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration successfull')
      this.emailVerification(res.user);
      this.router.navigate(['/selectEducation']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/signup']);
    })
  }

  adminLogout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('adminToken');
      this.router.navigate(['/admin-login']);
    }, err => {
      alert(err.message)
    })
  }


  //logout
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('userToken');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message)
    })
  }


  //forgotPassword
  forgotPassword(email:string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email'])
    },( err:any) => {
      alert('something went wrong');
    })
  }

  //email verification
  emailVerification(user: any) {
    user.emailVerification().then((res: any) => {
      this.router.navigate(['/verify-email']);
    }, (err: any) => {
      alert('something went wrong')
    })
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(() => {
      localStorage.setItem('usertoken', 'true');
      this.router.navigate(['/global-study-room'])
    }, err => {
      alert(err.message)
    })
  }


}
