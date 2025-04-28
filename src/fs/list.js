import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFolder = join(__dirname, 'files');

const list = async () => {
    // Write your code here 
    try {
        const fileList = await readdir(dataFolder);
        console.log(fileList);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await list();