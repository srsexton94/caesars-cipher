const caesarsCipher = (phrase, offset) => {
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

caesarsCipher('I love JavaScript!', 100) // Returns 'E hkra FwrwOynelp!'
