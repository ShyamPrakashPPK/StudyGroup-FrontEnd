import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.css']
})
export class MessagesContainerComponent {
  @Input() firstName!: string;
  @Input() profile_pic!: string;
}
