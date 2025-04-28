import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToWrite = join(__dirname, 'files/fileToWrite.txt');

const write = async () => {
    // Write your code here 
    const output = createWriteStream(fileToWrite);
    process.stdin.pipe(output);
};

await write();