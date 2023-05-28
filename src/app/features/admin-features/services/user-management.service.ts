import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  
}
