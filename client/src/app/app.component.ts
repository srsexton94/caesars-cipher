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

  decodedPhrase: string = '';

  cipherModel = new Cipher('', 0)

  constructor(
    private _encodingService: EncodingService
  ) {}

  onSubmit() {
    this._encodingService.encode(this.cipherModel)
      .subscribe(
        data => console.log('Success! ', data),
        error => console.error('Error! ', error)
      )
  }
}
