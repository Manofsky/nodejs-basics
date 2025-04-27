import { join } from 'node:path';
import { cwd } from 'node:process';
import { writeFile } from 'node:fs/promises';

const data = 'I am fresh and young';
const fileName = 'fresh.txt';
const folderPath = 'src/fs/files';

const create = async () => {
    // Write your code here 
    try {
        await writeFile(join(cwd(), folderPath, fileName), data, { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await create();