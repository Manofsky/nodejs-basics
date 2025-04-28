import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompressedFilePath = join(__dirname, 'files/fileToCompress.txt');
const archivePath = join(__dirname, 'files/archive.gz');

const decompress = async () => {
    // Write your code here 
    const gunzip = createGunzip();
    const rs = createReadStream(archivePath);
    const ws = createWriteStream(decompressedFilePath);
    await pipeline(rs, gunzip, ws);
};

await decompress();