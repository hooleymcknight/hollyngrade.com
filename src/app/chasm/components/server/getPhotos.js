'use server'
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const alignThumbnails = (photos) => {
    // photos count should be 3. 
    photos[0].span = photos[0].width > photos[0].height ? 'col-span-2' : 'row-span-2';
    return [...new Set(photos)];
}

const getMedian = (arr) => {
    if (!arr.length) return undefined;
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0
        ? arr[mid]
        : arr[mid -1];
};

const sortByDate = (arr) => {
    return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
}

export const getPhotos = async (slug) => {
    // return new Promise((resolve, reject) => {
    //     const success = true;
    //     if (success) resolve("Data received!");
    //     else reject("Error occurred.");
    // });
    const options = slug ? { where: { category: slug }, orderBy: { date: "asc" } } : { orderBy: { id: "asc" } };

    const res = await db.dogs.findMany(options);

    let categoryTiles = [...new Set(res.map(x => x.category))];
    
    for (const category of categoryTiles) {
        const idx = categoryTiles.indexOf(category);
        const catName = categoryTiles[idx];
        const photos = sortByDate(res.filter(x => x.category === category));

        for (let item of photos) {
            // add dates to all the descriptions.
            let dt = new Date(item.date);
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            dt = dt.toLocaleDateString('en-US', options);
            item.description = `${dt}${item.description.length ? ': ' + item.description : ''}`;

            // add a better share link, using the src field.
            // example of the src field: https://hollyngrade.com/dogs/05-Sanger/pool boys/IMG_2569.webp
            let fileName = item.src.split('/')[item.src.split('/').length - 1];
            let categoryPath = item.src.split('/dogs/')[1].split('/' + fileName)[0].replace(/\//g, '_').replace(/\s/g, '-');
            let shareLink = `https://hollyngrade.com/chasm/${categoryPath}?photo=${encodeURI(fileName)}`;
            item.share = shareLink;
            
            // fix video src
            if (item.type === 'video' && !item.sources?.type) {
                const ext = item.src.split('.')?.[item.src.split('.').length - 1];
                if (!item.sources) {
                    item.sources = [{
                        src: item.src,
                        type: `video/${ext}`
                    }];
                }
                
                const { src, ...videoItem } = item;
                item = { ...videoItem }
            }
        }

        categoryTiles[idx] = {
            "category": catName,
            "thumbnails": alignThumbnails([photos[0], getMedian(photos), photos[photos.length - 1]]),
            "photoSet": photos,
        }
    }

    return categoryTiles;
    
}