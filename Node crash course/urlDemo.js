import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

const urlOBJ = new URL(urlString);

console.log(urlOBJ);

console.log(url.format(urlOBJ));

console.log(import.meta.url);

console.log(url.fileURLToPath(import.meta.url));

console.log(urlOBJ.search);

const params = new URLSearchParams(urlOBJ.search)

console.log(params.get('q'));
params.append('limit', '5')
console.log(params);