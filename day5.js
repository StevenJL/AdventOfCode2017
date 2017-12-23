const fs = require('fs');

let inputFile = fs.readFileSync('day5.data', 'utf8').trim()
let inputData = inputFile.split('\n')

let position = 0
let steps = 0
let lengthOfArray = inputData.length

move = () => {
  let stepsToMove = Number.parseInt(inputData[position])
  inputData[position] = stepsToMove + 1
  position = position + stepsToMove
  steps++
}

while(position < lengthOfArray) {
  move()
}

console.log(steps)
