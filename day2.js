const fs = require('fs');

let maxArray = (array) => {
  return array.reduce((a,b) => { return Math.max(a,b) })
}

let minArray = (array) => {
  return array.reduce((a,b) => { return Math.min(a,b) })
}

let maxDiff = (row) => {
  let max = maxArray(row)
  let min = minArray(row)
  return max - min
}

let answer = 0

let inputFile = fs.readFileSync('day2.data', 'utf8').trim()

let inputData = inputFile.split('\n').map((row) => {
  return row.split(/\s+/)
})

inputData.forEach((row) => {
  answer = answer + maxDiff(row)
})

console.log(answer)
