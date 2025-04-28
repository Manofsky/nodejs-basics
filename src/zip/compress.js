import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompress = join(__dirname, 'files/fileToCompress.txt');
const archivePath = join(__dirname, 'files/archive.gz');

const compress = async () => {
    // Write your code here 
    const gzip = createGzip();
    const rs = createReadStream(fileToCompress);
    const ws = createWriteStream(archivePath);
    await pipeline(rs, gzip, ws);
};

await compress();