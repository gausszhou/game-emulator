const fs = require('fs');


const dir = fs.readdirSync(__dirname)

let result = [];
Array.from(dir).forEach(filePath => {
  if (filePath.includes('.gba')) {
    const matches = filePath.match(/\w+\s(?<name>[^\.]+)\.gba/);
    const path = matches[0];
    const name = matches[1];
    result.push({name, path})
  }
})

fs.writeFileSync(__dirname + '/info.json', JSON.stringify(result, null, 2))