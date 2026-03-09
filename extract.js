const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('The_System_As_Suspect.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text.substring(0, 10000));
});
