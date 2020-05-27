import { Injectable } from '@nestjs/common';
import { Cipher } from './cipher.model'

@Injectable()
export class CiphersService {
  ciphers: Cipher[] = [];

  addCipher(phrase: string, offset: number): string {
    // Generate a unique resource ID
    const id = '_' + Math.random().toString(36).substring(2)

    // Generate the encoded string
    const encodeCiph = function (phrase: string, offset: number): string {
      const alph = ("abcdefghijklmnopqrstuvwxyz").split('')
      const caps = alph.map(l => l.toUpperCase())
      const phraseArr = phrase.split('')

      const newArr = phraseArr.map(char => {
        if (char.match(/[a-z]/)) {
          const i = (alph.indexOf(char) + offset) % 26
          return alph[i]
        } else if (char.match(/[A-Z]/)) {
          const i = (caps.indexOf(char) + offset) % 26
          return caps[i]
        } else {
          return char
        }
      })
      return newArr.join('')
    }
    const encoded = encodeCiph(phrase, offset)

    // create a new cipher object
    const newCipher = new Cipher(
      id,
      phrase,
      offset,
      encoded
    )
    this.ciphers.push(newCipher)
    return encoded
  }
}
