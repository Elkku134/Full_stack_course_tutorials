//import fs from 'fs';
//import { writeFile } from 'fs';
import fs from 'fs/promises' 

// readfile() - callback

/*fs.readFile('./test.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// readFilesSycn() - Synchronous version
const data = fs.readFileSync('./test.txt', 'utf8');
console.log(data);
  

// readFIle() - Promsie .then()
fs.readFile('./test.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
*/
// Readfile() - async/wait

const readFile = async () => {
    try{
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch(error){
       console.log(error); 
    }
};

// wetiefile()

const writeFile = async() => {
    try {
        await fs.writeFile('./test.txt', 'Test writing to this file');
        console.log('File written to'); 
    } 
    catch (error) {
        console.log(error); 
    }
};

// append file
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nAppended text')
        console.log('File appended to'); 
    }
    catch (error) {
        console.log(error);
    }
}

writeFile();

appendFile();

readFile();