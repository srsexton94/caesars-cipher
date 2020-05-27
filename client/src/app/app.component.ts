import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caesars-cipher';

  decodedPhrase: string = '';

  constructor() { }

  getFormFields() {
    this.decodedPhrase += 'a'
  }
}
