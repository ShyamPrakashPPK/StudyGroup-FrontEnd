import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService {

  constructor(private auth: AuthGuardService, private router: Router) { }
  canActivate(): boolean {
    if (this.auth.IsUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
