/*
  17  16  15  14  13
  18   5   4   3  12
  19   6   1   2  11
  20   7   8   9  10
  21  22  23---> ...
*/

const target = 289326

const lodash = require('lodash')

let historyMap = new Map()
let currentPosition = [0,0]
let currentNumber = 1
let previousDirection
let currentDirection = 'right'

let nextDirection = (direction) => {
  switch(direction) {
    case 'right':
      return 'up'
    case 'up':
      return 'left'
    case 'left':
      return 'down'
    case 'down':
      return 'right'
  }
}

let nextPosition = (position, direction) => {
  switch(direction) {
    case 'right':
      return [position[0]+1, position[1]]
    case 'up':
      return [position[0], position[1]+1]
    case 'down':
      return [position[0], position[1]-1]
    case 'left':
      return [position[0]-1, position[1]]
  }
}

let includesByValue = (array, value) => {
  let answer = false
  array.forEach((tuple) => {
    if(lodash.isEqual(tuple, value)) {
      answer = true
    }
  })
  return answer
}

let move = () => {
  candPosition = nextPosition(currentPosition, currentDirection)

  if(historyMap.get(candPosition.toString())){
    currentDirection = previousDirection
    candPosition = nextPosition(currentPosition, currentDirection)
  }

  historyMap.set(currentPosition.toString(), true)
  currentPosition = candPosition
  currentNumber++
  previousDirection = currentDirection
  currentDirection = nextDirection(currentDirection)
}

let distanceToOrigin = (pos) => {
  return Math.abs(pos[0]) + Math.abs(pos[1])
}

while(currentNumber < target) {
  move()
}

console.log(distanceToOrigin(currentPosition))
