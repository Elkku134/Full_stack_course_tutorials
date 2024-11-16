import path from 'path';
import url from 'url';

const filePath = './dir1/di2/notest.txt';

// bacebane()
console.log(path.basename(filePath));

// Dirname
console.log(path.dirname(filePath));

//extension name
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(filePath2)