import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() numberEmitted = new EventEmitter<number>();
  private intervalRef: any;

  startGame() {
    let number = 0;
    this.intervalRef = setInterval(() => {
      this.numberEmitted.emit(number);
      number++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalRef);
  }
}
