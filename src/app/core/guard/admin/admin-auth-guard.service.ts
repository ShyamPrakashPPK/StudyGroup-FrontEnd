import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {
  constructor(private auth: AuthGuardService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.IsAdminLoggedIn()) {
      return true;
    }
    this.router.navigate(['admin-login']);
    return false;
  }
}
