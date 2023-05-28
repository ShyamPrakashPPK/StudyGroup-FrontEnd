import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {


  constructor() { }
  IsUserLoggedIn() {
    return !!localStorage.getItem('userToken');
  }

  IsAdminLoggedIn() {
    return !!localStorage.getItem('adminToken')
  }
}
