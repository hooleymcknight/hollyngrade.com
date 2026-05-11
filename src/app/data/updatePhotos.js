const fs = require('node:fs');
const { readdir } = require('node:fs/promises');

// images
const { imageSizeFromFile } = require('image-size/fromFile');
const exifr = require('exifr');

// videos
const ffprobe = require('ffprobe')
const ffprobeStatic = require('ffprobe-static');
const exiftool = require('exiftool-vendored').exiftool;
const videoFormats = ['mp4', 'mov', 'avi', '3gp'];

// general data
const dataFile = './photos.json';
const photosData = require(dataFile);
const photosDir = 'https://hollyngrade.com/dogs/'; // fix how this plays out down below. it won't work right now, it is looking for a relative path.

const updatePhotosData = async () => {
    let mapped = photosData.map(x => x.src);
    const files = await readdir(photosDir, { withFileTypes: true });

    let missingData = [];
    let directories = [];
    let mediaWithoutDate = [];

    for (const file of files) {
        if (file.isFile() && !mapped.includes(file)) {
            console.log('This file is missing, and loose:', file);
            console.log('Please move this file!!')
        }
        if (file.isDirectory()) {
            directories.push(file.name);
        }
    }

    for (const dir of directories) {
        console.log(`Searching directory "${dir}"...`);
        const dirFiles = await readdir(`${photosDir}${dir}/`, { withFileTypes: true });

        for (const dirFile of dirFiles) {
            let filePath = dirFile.parentPath + dirFile.name;
            let lightboxPath = `${dirFile.parentPath.split('public')[1]}${dirFile.name}`;
            let needsMoreInfo = false;

            // if we hit a directory
            if (dirFile.isDirectory()) {
                // add the nested directory to the directories array
                directories.push(filePath.split(photosDir)[1]);
            }
            // for all actual files:
            else if (dirFile.isFile() && !mapped.includes(lightboxPath)) {
                let dim = '';
                let date;

                // images
                if (!videoFormats.includes(dirFile.name.split('.')[1])) {
                    const metadata = await exifr.parse(filePath);
                    if (!metadata || (!metadata.DateTimeOriginal && !metadata['Creation Time'])) {
                        console.log(filePath)
                        console.log(metadata ? metadata : `no metadata for ${filePath}`)
                        console.log(metadata && metadata['Creation Time'] ? metadata['Creation Time'] : 'metadata but no creation time???')
                        mediaWithoutDate.push(filePath);
                        needsMoreInfo = true;
                    }
                    else {
                        dim = await imageSizeFromFile(filePath);
                        date = metadata.DateTimeOriginal || metadata['Creation Time'] || '';
                    }
                }
                // videos
                else {
                    const fileMetaData = await ffprobe(filePath, {path: ffprobeStatic.path})
                    const tags = await exiftool.read(filePath);
                    if (!tags || !tags.CreateDate || !tags.CreateDate.rawValue) {
                        mediaWithoutDate.push(filePath);
                        needsMoreInfo = true;
                    }
                    else {
                        dim = { height: fileMetaData.height, width: fileMetaData.width };
                        date = tags?.CreateDate?.rawValue || '';
                    }
                }

                // if the date needs reformatted:
                if (typeof(date) === 'string' && date.includes(' ')) {
                    let dateStr = date.split(' ')[0];
                    let timeStr = date.split(' ')[1];
                    dateStr = dateStr.replace(/:/g, '-');
                    date = new Date(`${dateStr}, ${timeStr}`);
                }

                // if it doesn't need more info, add it to the array we will generate data for
                if (!needsMoreInfo) {
                    missingData.push({
                        "src": lightboxPath,
                        "alt": "",
                        "width": dim.width,
                        "height": dim.height,
                        "title": "",
                        "description": "",
                        "data-tags": "",
                        "date": date,
                        "category": dir,
                    });
                }
            }
        }
    }

    if (!missingData.length) {
        console.log('No files are missing from the data.')

        if (mediaWithoutDate.length) {
            console.log(`\n\nDate information needed for the following media files: \n-`, mediaWithoutDate.map(x => x.split('/public')[1]).join('\n- '));
        }

        return;
    }
    
    // add the missing data info the json file
    console.log(`\n\n${missingData.length + mediaWithoutDate.length} files are missing from the json data.`);

    console.log(`\n\nAdding data for ${missingData.length} media files now...`);

    /**
     * adding data to the json
     */
    const combinedData = [...photosData];
    console.log(combinedData.length)
    combinedData.push(...missingData)
    console.log(combinedData.length)
    fs.writeFileSync(dataFile, JSON.stringify(combinedData));

    console.log(`\n\nDate information needed for the following media files: \n-`, mediaWithoutDate.map(x => x.split('/public')[1]).join('\n- '));

}

updatePhotosData();