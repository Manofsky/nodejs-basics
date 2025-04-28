import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCalculateHashFor = join(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // Write your code here 
    const hash = createHash('sha256');
    const input = createReadStream(fileToCalculateHashFor);
    input.on('data', (chunk) => {
        hash.update(chunk)
    })

    input.on('end', () => {
        console.log(hash.digest('hex'));
    })
};

await calculateHash();