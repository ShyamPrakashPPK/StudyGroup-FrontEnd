import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';




interface ApiResponse {
  status: string;
  message: string;
  token: string;
}


@Injectable({
  providedIn: 'root'
})

export class LoginService {


  private apiUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient, private router: Router) { }


  login(data: any) {
    return this.http.post<ApiResponse>(`${this.apiUrl}/auth/user-login`, data, { observe: 'response' }).subscribe((result) => {
      // if (result) {
      //   console.log(result, "resulttttt")
      //   this.isSellerLoggedIn.next(true)
      //   localStorage.setItem('user', JSON.stringify(result))
      //   this.router.navigate(['/selectEducation'])
      // }
      console.log(result,"this is result");
      
      if (result && result.body) { // check if result.body is not null
        const token = result.body.token;
        localStorage.setItem('userToken', token);
        this.router.navigate(['/global-study-room']);
      }
    })
  }

}
