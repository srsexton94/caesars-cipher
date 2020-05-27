import { Injectable } from '@nestjs/common';
import { Cipher } from './cipher.model'

@Injectable()
export class CiphersService {
  ciphers: Cipher[] = [];

  addCipher(phrase: string, offset: number): string {
    // Generate a unique resource ID
    const id = '_' + Math.random().toString(36).substring(2)

    // function logic to encode the string
    const encodeCiph = function (phrase: string, offset: number): string {
      // declare alphabet arrays, one for lower case and one for upper
      const alph = ("abcdefghijklmnopqrstuvwxyz").split('')
      const caps = alph.map(l => l.toUpperCase())

      // break the characters of the string into elements of an array
      const phraseArr = phrase.split('')

      // for each letter, maintain casing and return its encoded counterpart
      // if the character is not a letter, return that character as is
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

    // call that function with the given phrase & offset values, assign to var
    const encoded = encodeCiph(phrase, offset)

    // create a new cipher object
    const newCipher = new Cipher(
      id,
      phrase,
      offset,
      encoded
    )

    // Add the newly created cipher object to a storage array of Ciphers
    this.ciphers.push(newCipher)

    // return only the encoded string for use on the client side
    return encoded
  }
}
