import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRead = join(__dirname, 'files/fileToRead.txt');

const read = async () => {
    // Write your code here 
    const input = createReadStream(fileToRead);
    input.pipe(process.stdout);
};

await read();