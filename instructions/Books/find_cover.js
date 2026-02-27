const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

async function main() {
    console.log('Scanning ' + files.length + ' images...');
    for (const file of files) {
        try {
            const filePath = path.join(dir, file);
            console.log('Checking: ' + file);
            const { data: { text } } = await Tesseract.recognize(filePath, 'eng', { logger: () => { } });
            if (text.toLowerCase().includes('china') || text.toLowerCase().includes('apple') || text.toLowerCase().includes('red')) {
                console.log('FOUND MATCH IN:', file);
                console.log('Text snippet:', text.substring(0, 100).replace(/\n/g, ' '));
            }
        } catch (e) {
            console.error('Error on ' + file, e.message);
        }
    }
    console.log('Done scanning.');
}
main();
