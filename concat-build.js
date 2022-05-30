const fs = require('fs');
const distPath = './dist/angular-elements';


const jsFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.js'));
const cssFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.css'));

let jsFileData = '';
let cssFileData = '';

for (const file of jsFiles) {
  jsFileData += fs.readFileSync(`${distPath}/${file}`)
}

for (const file of cssFiles) {
  cssFileData += fs.readFileSync(`${distPath}/${file}`)
}

fs.writeFileSync(`${distPath}/angular-final-bundle.js`, jsFileData);
fs.writeFileSync(`${distPath}/angular-final-bundle.css`, cssFileData);
