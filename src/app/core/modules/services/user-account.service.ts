import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { userModel } from 'src/app/core/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  //subscriptions 
  private userFromTokenSubscription!:Subscription

  private user$ = new BehaviorSubject<userModel>({
    firstName: '',
    lastName: '',
    email: '',
    education:''    
  })

  // private state$: BehaviorSubject

  constructor( 
    private http: HttpClient,
    private router: Router,
  ){ 
    this.userFromToken()
  }


  setUser() {
    this.userFromToken();
  }


  userFromToken() {
    if (localStorage.getItem('token')) {
      this.userFromTokenSubscription = this.http.get<userModel>(`$<host>/user`).subscribe({
        next: (response) => {
          this.user$.next(response)
        }
      })
    }
  }

}


