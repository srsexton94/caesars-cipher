import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cipher } from './cipher';

const configUrl = () => {
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3000/ciphers'
  } else {
    return '<replace-with-production-url>'
  }
}

@Injectable({
  providedIn: 'root'
})
export class EncodingService {
  _url = configUrl()
  constructor(
    private _http: HttpClient
  ) { }

  encode(cipher: Cipher) {
    return this._http.post<any>(this._url, cipher)
  }
}
