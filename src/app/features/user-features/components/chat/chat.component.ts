import { Component } from '@angular/core';
// import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  // menuIcon = faEllipsis

  currentUser: any;
  selectedUser!: string;
  selectedUsername!: string;
  selectedProfile!: string;
  messages: any[] = [];
  users: any[] = [];
  message!: string;
  userEmail: any;

  constructor(private chatService: ChatService) { 
    this.userEmail = localStorage.getItem('Email')
  
  }


  ngOnInit(): void {
    console.log(this.userEmail,"ins");
    
    this.chatService.connect();
    this.currentUser=localStorage.getItem('Email')
    this.chatService.users().subscribe((users: any[]) => {
      this.users = users;
      console.log(this.users, "userssssssssssssssssssssssssssssssssss");
    });

    this.chatService.getPersonalMessages().subscribe((message: any) => {
      if ((message.sender === this.currentUser.email && message.recipient === this.selectedUser) ||
        (message.sender === this.selectedUser && message.recipient === this.currentUser.email)) {
        message.sender === this.currentUser.email ? message.isSender = true : message.isReceiver = true;
      }
      if (this.selectedUser === message.sender) {
        this.messages.push(message);
      }
      console.log(message, "hhiihhsssssi");
    })
  }

  selectUser(user: any) {
    this.selectedUser = user.email;
    this.selectedUsername = user.username;
    this.selectedProfile = user.profile_pic;
    this.chatService.getPreviousMessages(this.selectedUser).subscribe((messages: any) => {
      this.messages = messages.map((message: any) => {
        if ((message.sender === this.currentUser.email && message.recipient === this.selectedUser) ||
          (message.sender === this.selectedUser && message.recipient === this.currentUser.email)) {
          message.sender === this.currentUser.email ? message.isSender = true : message.isReceiver = true;
        }
        return message;
      })
      console.log(this.messages, "hhiihhi");
    })
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.chatService.sendPersonalMessage({
        sender: this.currentUser.email,
        recipient: this.selectedUser,
        text: this.message
      });

      this.messages.push({
        sender: this.currentUser.email,
        recipient: this.selectedUser,
        text: this.message,
        isSender: true
      });
      this.message = '';
    }
  }
}
