import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


const httpOptons = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

interface ApiResponse {
  status: string;
  message: string;
  token: string;
  userReturn: any;
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  private apiUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient, private router: Router) { }


  userSignUp(data: any) {
    return this.http.post<ApiResponse>(`${this.apiUrl}/auth/register`, data, { observe: 'response' }).subscribe((result) => {
      if (result && result.body) {
        const token = result.body.token;
        const firstName = result.body.userReturn.firstName;
        const lastName = result.body.userReturn.lastName;
        const email = result.body.userReturn.email
        localStorage.setItem('userToken', token);
        localStorage.setItem('FirstName', firstName);
        localStorage.setItem('LastName', lastName);
        localStorage.setItem('Email', email);
        this.router.navigate(['/global-study-room']);
      }
    });
  }


}


