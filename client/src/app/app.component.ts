import { Component } from '@angular/core';
import { Cipher } from './cipher'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caesars-cipher';

  decodedPhrase: string = '';

  cipherModel = new Cipher('', 0)

  constructor() { }

  onSubmit() {
    console.log(this.cipherModel)
  }
}
