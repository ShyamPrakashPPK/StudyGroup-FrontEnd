import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { userModel } from 'src/app/core/models/user.model';
import {environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  value!: string;

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) { }
  
  signUp(user: userModel) {
    return this.http.post(`${environment.host}/auth/register`,user)
  }

}
 