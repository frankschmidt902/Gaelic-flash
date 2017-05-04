import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  @Input()
  flashCard: any

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit() { 
    console.log(this.flashCard)
  }

  submitAnswer(index: number = -1): void {
    let result: boolean
    // did the user select the correct answer
    result = (index === this.flashCard.correctAnswer ) ? true : false
    // update our parent
    this.change.emit(result)
  }


}
