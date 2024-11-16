import crypto, { createPrivateKey } from 'crypto';

const hash = crypto.createHash('sha256');
hash.update('password124');
console.log(hash.digest('hex'));

crypto.randomBytes(16, (err, buf) => {
    if(err) throw err;
    console.log(buf.toString('hex'));
});

const algortihm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);