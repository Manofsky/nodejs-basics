import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rename as renamePath } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldPath = join(__dirname, 'files/wrongFilename.txt');
const newPath = join(__dirname, 'files/properFilename.md');

const rename = async () => {
    // Write your code here 
    try {
        await renamePath(oldPath, newPath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await rename();