// Common Javascript core modules
const fs = require('fs');
const fsPromise = fs.promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'files', 'newPromiseWrite.txt'), 'utf8');
        console.log(data);
        await fsPromise.unlink(path.join(__dirname, 'files', 'newPromiseWrite.txt'));
        await fsPromise.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromise.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\nNew data has been appended');
        const newData = await fsPromise.readFile(path.join(__dirname, 'files', 'promiseWrite.txt'), 'utf8');
        console.log(newData);
        await fsPromise.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), (path.join(__dirname, 'files', 'newPromiseWrite.txt')));
        console.log(`newPromiseData =  ${newData}`);
        

    } catch (err) {
        console.error(err);
    }
}

fileOps();

// This id fs.readfile using the path as a string
// fs.readFile('./files/starter.txt', 'utf8', (err, data) =>{
//     if (err) throw err;
//     console.log(data);
// });

// // better way
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// writing to an existing file... sunce there is no data returned, only err is used in the callback method parameter list.
// fs.writeFile(path.join(__dirname, 'files', 'newFile.txt'), 'Howdy neighbor\n', (err) => {
//     if (err) throw err;
//     console.log('write to newFile.txt is complete');

//     fs.appendFile(path.join(__dirname, 'files', 'newFile.txt'), 'How are you doing?\n', (err) => {
//         if (err) throw err;
//         console.log('First append of newFile.txt is complete');
        
//         fs.appendFile(path.join(__dirname, 'files', 'newFile.txt'), 'I hope you are having a nice day.\n', (err) => {
//             if (err) throw err;
//             console.log('Second append of newFile.txt is complete');
            
//             fs.rename(path.join(__dirname, 'files', 'newFile.txt'), path.join(__dirname, 'files', 'newerFile.txt'), (err) => {
//                 if (err) throw err;
//                 console.log('Rename to newerFile is complete');
//             });
//         });
//     });
    
// });

// // appendFile will add to an existing file or create a file if an existing is not there.
// fs.appendFile(path.join(__dirname, 'files', 'appendFile.txt'), 'Howdy neighbor\n', (err) => {
//     if (err) throw err;
//     console.log('Append to appendFile.txt is complete');
// });

// // appendFile will add to an existing file or create a file if an existing is not there.
// fs.rename(path.join(__dirname, 'files', 'starter.txt'), path.join(__dirname, 'files', 'newStarter.txt'), (err) => {
//     if (err) throw err;
//     console.log('Rename of starter.txt to newStarter.txt is complete');
// });