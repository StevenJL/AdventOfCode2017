const fs = require('fs');
let inputFile = fs.readFileSync('day7.data', 'utf8').trim()
let programDecs = inputFile.split('\n')

let bottomMap = new Map()
let bottom

for (let programDec of programDecs) {
  if(programDec.includes('->')){
    programs = programDec.split('->').map(str => str.trim())
    let botProgram = programs[0].split(' ')[0]
    let topPrograms = programs[1].split(',').map(str => str.trim())
    for(topProgram of topPrograms){
      bottomMap.set(topProgram, botProgram)
    }
    if(bottom == undefined){
      bottom = botProgram
    }
  }
}

while(bottomMap.get(bottom)) {
  bottom = bottomMap.get(bottom)
}

console.log(bottom)
