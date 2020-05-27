import { Component } from '@angular/core';
import { Cipher } from './cipher';
import { EncodingService } from './encoding.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'caesars-cipher';

  // placeholder empty string to fill with returned data from API
  decodedPhrase: string = '';

  // creates a object with `phrase` and `offset` properties to reflect inputs
  cipherModel = new Cipher('', 0)

  // accesses a service to make calls to the API
  constructor(
    private _encodingService: EncodingService
  ) {}

  // function called when the user submits the form, makes the API call
  // currently logs the response (only error, no API set up yet)
  onSubmit() {
    this._encodingService.encode(this.cipherModel)
      .subscribe(
        data => console.log('Success! ', data),
        error => console.error('Error! ', error)
      )
  }
}
