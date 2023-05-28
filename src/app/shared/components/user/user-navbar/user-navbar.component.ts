import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  constructor(private auth:AuthService,private route:Router){}

//for solo study room
  soloStudyRoom() {
    this.route.navigate(['/solo-study-room'])
  }

//global room 
  globalStudyRoom() {
    this.route.navigate(['/global-study-room'])
  }

//globalfeeds
  globalfeeds() {
    this.route.navigate(['global-feed'])
  }


//user profile or stat room
  profile() {
    this.route.navigate(['/user-profile-and-stats'])
  }
//logout 
  logout() {
    this.auth.logout()
  }

  
}
