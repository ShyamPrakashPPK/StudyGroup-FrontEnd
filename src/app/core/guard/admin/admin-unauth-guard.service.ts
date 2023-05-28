import { Injectable } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminUnauthGuardService {

  constructor(private auth: AuthGuardService, private router: Router) { }
  
  canActivate(): boolean{
    if (!this.auth.IsAdminLoggedIn()) {
      return true;
    }
    this.router.navigate(['admin/admin-dashboard']);
    return false;
  }
}
