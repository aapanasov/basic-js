const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    console.log(this.chain.length)
    return this
  },

  addLink(value) {
    this.chain.push(value)
    return this
  },

  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1)
      return this
    }
    this.chain = []
    throw new Error("You can't remove incorrect link!")
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const finished = []
    this.chain.forEach(link => finished.push(`( ${link} )`))
    this.chain = []
    return finished.join("~~")
  }
};

module.exports = {
  chainMaker
};