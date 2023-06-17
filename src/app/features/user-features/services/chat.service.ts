import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ChatService {

  id!:string

  private socket!: Socket;
  private url = 'http://localhost:3000/api/'; // your server local path

  constructor(private http: HttpClient) {
    this.socket = io(this.url, { transports: ['websocket', 'polling', 'flashsocket'] });
   }
  
  connect(): void {
    this.socket = io("http://localhost:3000");
  }

  users(): any {
    return this.http.get(`${this.url}chat/users`);
  }


  // getCurrentUser(email:string) {
  //   return this.http.get(this.url + 'chat/currentuser/'+email);
  // }



  sendPersonalMessage(message: any) {
    this.socket.emit('personal-message', message);
  }

  getPreviousMessages(selectedUser: string) {
    return this.http.get(this.url + 'chat/messages/' + selectedUser);
  }

  getPersonalMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('get-personal-message', (data: any) => {
        observer.next(data);
      });
    });
  }




  //////////////////////////////////chat app local storage
  joinRoom(data: any): void {
    this.socket.emit('join', data);
  }

  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }

  getMessage(): Observable<any> {
    return new Observable<{ user: string, message: string }>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }

  getStorage() {
    const storage: string | null = localStorage.getItem('chats');
    return storage ? JSON.parse(storage) : [];
  }

  setStorage(data: any) {
    localStorage.setItem('chats', JSON.stringify(data));
  }
}
