import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementNumber = new EventEmitter<number>()
  interval
  num = 0

  constructor() { }

  ngOnInit(): void {
  }

  emitIncrementNumber = () => {
    this.incrementNumber.emit(++this.num)
  }

  onGameStart = () => {
    this.interval = setInterval(this.emitIncrementNumber, 1000)
  }

  onGameEnd() {
    clearInterval(this.interval)
  }

}
