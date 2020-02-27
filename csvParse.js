const csv = require('csv-parser');
const fs = require('fs');

let dataPath = '/Accidental_Drug_Related_Deaths_2012-2018.csv';

let result = [];

fs.createReadStream(__dirname + '/data' + dataPath)
  .pipe(csv())
  .on('data', (row) => {
    result.push(row);
  })
  .on('end', () => {
    console.log(result)
    console.log('CSV file successfully processed');
  });
