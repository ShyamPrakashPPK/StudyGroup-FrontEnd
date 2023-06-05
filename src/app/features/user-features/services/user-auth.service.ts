import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { userModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  value!: string;

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) { }
  
  

}
 