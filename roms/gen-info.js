const fs = require("fs");
const path = require("path");

const dir = fs.readdirSync(__dirname);
const result = [];

Array.from(dir).forEach((filePath) => {
  const fileOrFolder = path.join(__dirname, filePath);
  if (fs.statSync(fileOrFolder).isDirectory()) {
    const dir1 = fs.readdirSync(fileOrFolder);
    Array.from(dir1).forEach((item) => {
      if (item.includes(".zip") || item.includes(".gba")) {
        const matches = item.match(/\w+\s(?<name>[^\.]+)\.(zip|gba)/);     
        const path = filePath + '/' + matches[0];
        const name = matches[1];
        result.push({ name, path });
      }
    });
  }
});

fs.writeFileSync(__dirname + "/info.json", JSON.stringify(result, null, 2));
