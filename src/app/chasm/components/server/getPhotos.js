'use server'
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const alignThumbnails = (photos) => {
    // photos count should be 3. 
    photos[0].span = photos[0].width > photos[0].height ? 'col-span-2' : 'row-span-2';
    return photos;
}

const getPhotos = async () => {
    // return new Promise((resolve, reject) => {
    //     const success = true;
    //     if (success) resolve("Data received!");
    //     else reject("Error occurred.");
    // });

    const res = await db.dogs.findMany();

    let categoryTiles = [...new Set(res.map(x => x.category))];
    // console.log(categoryTiles)
    
    for (const category of categoryTiles) {
        const idx = categoryTiles.indexOf(category);
        const catName = categoryTiles[idx];
        const photos = res.filter(x => x.category === category);

        categoryTiles[idx] = {
            "category": catName,
            "thumbnails": alignThumbnails([photos[0], photos[1], photos[2]]),
            "photoSet": photos,
        }
    }

    return categoryTiles;
    
}

export default getPhotos;