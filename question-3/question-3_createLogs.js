const fs = require('fs');
const path = require('path');

//Create Log Directory and files
const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `${i}.`);
    console.log(`${fileName}`);
}
