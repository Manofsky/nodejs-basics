import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToReadPath = join(__dirname, 'files/fileToRead.txt');

const read = async () => {
    // Write your code here 
    try {
        const data = await readFile(fileToReadPath, { encoding: 'utf8' });
        console.log(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await read();