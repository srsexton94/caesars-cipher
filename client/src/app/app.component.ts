import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caesars-cipher';

  decodedPhrase: string = '';
  phrase: string = '';
  offset: number = 0;

  constructor() { }

  decipher() {
    this.decodedPhrase = this.phrase + this.offset
  }
}
