const fs = require('fs');

let inputFile = fs.readFileSync('day4.data', 'utf8').trim()
let inputData = inputFile.split('\n')

let answer = 0

class WordMap {
  constructor() {
    this.map = new Map()
  }

  add(word) {
    let mapVal = this.map.get(word)
    if(mapVal) {
      this.map.set(word, (mapVal + 1))
    } else {
      this.map.set(word, 1)
    }
  }

  get(word) {
    return this.map.get(word)
  }
}


let isValidPassphrase = (str) => {
  let output = true
  let strArray = str.split(/\s+/)
  let wordMap = new WordMap()
  for (let str of strArray) {
    if(wordMap.get(str) == 1) {
      output = false
      break
    }
    wordMap.add(str)
  }
  return output
}

for (let row of inputData) {
  if(isValidPassphrase(row)) {
    answer++
  } else {
  }
}

console.log(answer)
