const fs = require('fs');

let inputFile = fs.readFileSync('day6.data', 'utf8').trim()
let memoryBank = inputFile.split(/\s+/).map(n=>Number.parseInt(n))

let distributions = new Map()
distributions.set(memoryBank.join('-'), true)

let numDistributions = 0
let maxMemIndx
let maxMemVal

findMax = () => {
  maxMemVal = 0
  maxMemIndx = 0
  for(let indx = 0; indx < memoryBank.length; indx++) {
    if(maxMemVal < memoryBank[indx]) {
      maxMemIndx = indx
      maxMemVal = memoryBank[indx]
    }
  }
}

redistribute = () => {
  numDistributions++
  let blocks = maxMemVal
  memoryBank[maxMemIndx] = 0
  let indx = ((maxMemIndx + 1) % memoryBank.length)
  while(blocks > 0) {
    blocks--
    memoryBank[indx]++
    indx++
    indx = indx % memoryBank.length
  }
}

checkIfSeenBefore = () => {
  let currentDistribution = memoryBank.join('-')
  if(distributions.get(currentDistribution)){
    return true
  } else {
    distributions.set(currentDistribution, true)
    return false
  }
}

let notSeenBefore = true
while(notSeenBefore) {
  findMax()
  redistribute()
  notSeenBefore = !checkIfSeenBefore()
}

console.log(numDistributions)
