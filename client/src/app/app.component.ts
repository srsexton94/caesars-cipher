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

  // dispaly returned data from API
  decodedPhrase: string = '';
  // display a user-facing error message
  errorMsg: string = '';
  // display query index (from localStorage)
  indexHtml: string = localStorage.getItem('indexHtml');

  // uses `cipher.ts` for double binding with form
  cipherModel = new Cipher('', 0)

  constructor(
    private _encodingService: EncodingService
  ) {}

  // clears previous queries (index view)
  clearCodes() {
    localStorage.clear()
    this.indexHtml = localStorage.getItem('indexHtml')
  }

  // accesses `encodingService` from constructor to make POST request to the API
  onSubmit() {
    this._encodingService.encode(this.cipherModel)
      .subscribe(
        // displays the response data and updates the index view (localStorage)
        data => {
          this.decodedPhrase = data.encoded
          if (this.indexHtml === null) {
            this.indexHtml = ''
          }
          this.indexHtml += '<li>' + this.cipherModel.phrase + ' --> ' + data.encoded + '</li>'
          localStorage.setItem('indexHtml', this.indexHtml)
        },
        // displays a error message to the user & the console
        error => {
          this.errorMsg = 'Oops! Something went wrong, please try again later'
          console.log('Error: ', error)
        }
      )
  }
}
