import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const data = 'I am fresh and young';
const fileName = 'fresh.txt';
const folderPath = 'files';

const create = async () => {
    // Write your code here 
    try {
        await writeFile(join(__dirname, folderPath, fileName), data, { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await create();