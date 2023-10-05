const fs = require('fs');
const path = require('path');

//Remove Log directory and files
const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    const logFiles = fs.readdirSync(logsDir);

    if (logFiles.length > 0) {
        logFiles.forEach(file => {
            console.log(`delete files ...${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });
    }
    fs.rmdirSync(logsDir);

}

