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
  // empty string to fill with a user-facing error message upon erred API call
  errorMsg: string = '';
  indexHtml: string = '';

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
        data => {
          this.decodedPhrase = data.encoded
          this.indexHtml += '<li>' + this.cipherModel.phrase + ' --> ' + data.encoded + '</li>'
          // console.log(this.cipherModel.phrase)
        },
        error => {
          this.errorMsg = 'Oops! Something went wrong, please try again later'
          console.log('Error: ', error)
        }
      )
  }
}
