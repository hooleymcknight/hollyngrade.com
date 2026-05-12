const fs = require('node:fs');
const photosData = require('./photos.json');
const descData = require('./photoDescriptions.json');

const urlPrefix = 'https://hollyngrade.com/dogs';

const writeFileNames = () => {
    const newData = [...photosData].map(x => x.src || x.sources.src);
    // console.log(newData);
    let fileNames = [];
    let descDataToWrite = [...descData];

    for (const item of newData) {
        fileNames.push({
            "name": item.replace(urlPrefix, ''),
            "src": item,
            "alt": "",
            "title": "",
            "description": "",
            "data-tags": "",
        });
    }

    for (const item of fileNames) {
        if (!descData.filter(x => x.name === item.name)?.length) {
            // there is not already desc data for this image, we can create a blank slot.
            // newFilesToAdd.push(item);
            descDataToWrite.push(item);
        }
    }

    fs.writeFileSync('./photoDescriptions.json', JSON.stringify(descDataToWrite));
}

writeFileNames();