import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent {

  constructor(private route: Router) { }

  newPost() {
    this.route.navigate(['/addNewPost'])
  }
}
