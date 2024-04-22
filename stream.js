const fs = require('fs');
const path = require('path');
const rs = fs.createReadStream(path.join(__dirname, 'files', 'ishmael.txt'), {encoding: 'utf8'});
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new-ishmael.txt'));

// rs.on("data", (dataChunk) => {
//     ws.write(dataChunk, (err) => {
//         console.log(err);
//     })
//     console.log(dataChunk);
// })


// same as above but more efficient
rs.pipe(ws);