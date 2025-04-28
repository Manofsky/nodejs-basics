import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, readdir, copyFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFolder = join(__dirname, 'files');
const dataCopyFolder = join(__dirname, 'files_copy');

const copy = async () => {
    // Write your code here 
    try {
        const files = await readdir(dataFolder);
        await mkdir(dataCopyFolder, { recursive: false });

        await Promise.all(files.map(file => copyFile(join(dataFolder, file), join(dataCopyFolder, file))));
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await copy();
