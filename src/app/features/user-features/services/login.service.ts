import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';




interface ApiResponse {
  status: string;
  message: string;
  token: string;
  user: any;
}


@Injectable({
  providedIn: 'root'
})

export class LoginService {


  private apiUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient, private router: Router) { }


  login(data: any) {
    return this.http.post<ApiResponse>(`${this.apiUrl}/auth/user-login`, data, { observe: 'response' }).subscribe((result) => {
 

      if (result && result.body) { // check if result.body is not null
        const token = result.body.token;
        const firstName = result.body.user.firstName;
        const lastName = result.body.user.lastName;
        const email = result.body.user.email
        localStorage.setItem('userToken', token);
        localStorage.setItem('FirstName', firstName);
        localStorage.setItem('LastName', lastName);
        localStorage.setItem('Email', email);
        this.router.navigate(['/global-study-room']);
        localStorage.setItem('userToken', token);
        this.router.navigate(['/global-study-room']);
      }
    })
  }

}
