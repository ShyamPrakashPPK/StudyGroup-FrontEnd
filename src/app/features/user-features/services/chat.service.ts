import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ChatService {

  private socket!: Socket;
  private url = 'http://localhost:3000'; // your server local path

  constructor(private _http: HttpClient) { }
  
  connect(): void {
    this.socket = io(this.url);
  }

  users(): any {
    return this._http.get(`${this.url}chat/users`);
  }

  getCurrentUser() {
    return this._http.get(this.url + 'chat/currentuser');
  }

  sendPersonalMessage(message: any) {
    this.socket.emit('personal-message', message);
  }

  getPreviousMessages(selectedUser: string) {
    return this._http.get(this.url + 'chat/messages/' + selectedUser);
  }

  getPersonalMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('get-personal-message', (data: any) => {
        observer.next(data);
      });
    });
  }
}
