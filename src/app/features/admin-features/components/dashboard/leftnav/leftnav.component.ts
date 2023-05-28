import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  constructor(private authservice:AuthService){}

  @Output() toggledEvent: any = new EventEmitter();

  ngOnInit():void{}

  toggleAction() {
    this.toggledEvent.emit('')
  }

  logOut() {
    this.authservice.adminLogout()
  }

}
