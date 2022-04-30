const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  constructor(mod) {
    if (mod === true || arguments.length === 0) {
      this.mod = 'direct'
    } else if (mod === false) {
      this.mod = 'reverse'
    }
  }

  outResult = (result) => {
    if (this.mod === 'direct') {
      return result.join('')
    } else if (this.mod === 'reverse') {
      return result.reverse().join('')
    }
  }

  checkArgs = (a, b) => {
    if (!a || !b) throw new Error('Incorrect arguments!')
  }


  encrypt(message, keyword) {
    this.checkArgs(message, keyword)
    const encrypted = []
    const key = keyword.toUpperCase()
    const msg = message.toUpperCase()
    const N = this.alphabet.length

    let keyIndex = 0
    for (let i = 0; i < msg.length; i++) {
      if (this.alphabet.includes(msg[i])) {
        encrypted.push(
          this.alphabet[(this.alphabet.indexOf(msg[i])
            + this.alphabet.indexOf(key[keyIndex])) % N]
        )

        keyIndex++
        if (keyIndex >= key.length) {
          keyIndex = 0
        }
      } else {
        encrypted.push(msg[i])
      }
    }

    return this.outResult(encrypted)
  }

  decrypt(message, keyword) {
    this.checkArgs(message, keyword)
    const decrypted = []
    const key = keyword.toUpperCase()
    const msg = message.toUpperCase()
    const N = this.alphabet.length

    let keyIndex = 0
    for (let i = 0; i < msg.length; i++) {
      if (this.alphabet.includes(msg[i])) {
        const p = (this.alphabet.indexOf(msg[i])
          + N - this.alphabet.indexOf(key[keyIndex])) % N

        decrypted.push(this.alphabet[p])

        keyIndex++
        if (keyIndex >= key.length) {
          keyIndex = 0
        }

      } else {
        decrypted.push(msg[i])
      }
    }

    return this.outResult(decrypted)

  }
}

module.exports = {
  VigenereCipheringMachine
};
