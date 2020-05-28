import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cipher } from './cipher';

@Injectable({
  providedIn: 'root'
})
export class EncodingService {
  _url = 'http://localhost:3000/ciphers'
  constructor(
    private _http: HttpClient
  ) { }

  encode(cipher: Cipher) {
    return this._http.post<any>(this._url, cipher)
  }
}
