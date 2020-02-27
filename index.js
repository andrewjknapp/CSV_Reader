const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('PRECIP_HLY_sample_csv.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
