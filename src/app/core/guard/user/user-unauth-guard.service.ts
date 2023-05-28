import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class UserUnauthGuardService {

  constructor(private auth: AuthGuardService, private router: Router) { }
  canActivate(): boolean {
    if (!this.auth.IsUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['global-study-room'])
    return false;
  }
}
