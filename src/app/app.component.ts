import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentences();
  userInput = '';

  onInputChange(value: string) {
    this.userInput = value;
  }

  compare(randomTextLetter: string, userEnterdText: string) {
    if (!userEnterdText) {
      return 'pending';
    }

    return randomTextLetter === userEnterdText ? 'correct' : 'incorrect';
  }
}
