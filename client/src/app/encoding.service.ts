import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncodingService {
  _url = ''
  constructor() { }

  encode(cipher: Cipher) {
    return this._http.post<any>(this._url, cipher)
  }
}
