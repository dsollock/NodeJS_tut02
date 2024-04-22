const fs = require('fs');

if (!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => {
        console.log('New directoy created.')
    });
}

if (!fs.existsSync('./newDir')){
    fs.mkdir('./newDir', (err) => {
        console.log('NewDir directoy created.')
    });
}

if (fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
        console.log('New directoy removed.')
    });
}