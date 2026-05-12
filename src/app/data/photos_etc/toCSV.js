const fs = require('node:fs')
const { json2csv } = require('json-2-csv');

const dataFile = './photos.json';
const data = require(dataFile);

const convert = async () => {
  try {
    const csv = await json2csv(data);
    // console.log(csv);
    // To save to a file:
    fs.writeFileSync('output.csv', csv);
  } catch (err) {
    console.error(err);
  }
};
convert();