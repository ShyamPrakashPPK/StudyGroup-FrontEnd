import { Component } from '@angular/core';

@Component({
  selector: 'app-user-solo-room',
  templateUrl: './user-solo-room.component.html',
  styleUrls: ['./user-solo-room.component.css']
})
export class UserSoloRoomComponent {


  title = 'stopwatch';

  ms: any = '0' + 0;
  sec: any = '0' + 0;
  min: any = '0' + 0;
  hr: any = '0' + 0;

  startTimer: any;
  running:boolean= false;

  start(): void{
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if (this.ms === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms='0'+0
        }

        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0
        }

        if (this.min === 60) {
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0
        }
      },10)
    } else {
      this.stop();
    }
  }

  stop(): void{
    clearInterval(this.startTimer);
    this.running = false;
  }

}
