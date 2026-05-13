export const processSpanClasses = (input, thumbnailsSet) => {
    if (thumbnailsSet.length < 2) return 'aspect-square';
    switch (input) {
        case "col-span-2":
            return `${input} aspect-[2/1]`;
        case "row-span-2":
            return `${input} aspect-[1/2] stretch-double-row-height`;
        default:
            return 'aspect-square';
    }
}

export const processCategoryName = (name) => {
    let returnName = name.replace(/\d+-/g, '').replace(/-/g, ' ').replace(/_/g, '/').replace(/([A-Z])/g, ' $1').replace(/^./, (str) => { return str.toUpperCase(); });
    // the custom requests:
    returnName = returnName.replace('Woods With Me', 'In the Woods with Me').replace('Atx Sort', 'ATX (some year or other)').replace('2022', '2022 - First Year in WA')
    return returnName;
}

export const pathnameSlug = (name) => {
    // this comes in as the category from the database still, not the processed name. ex. "05-Sanger/pool boys"
    // goes out as a single pathname. ex. "05-Sanger_pool boys" (I guess the - gets fixed somewhere else?)
    return name.replace(/\//g, '_');
}

export const databaseSlug = (name) => {
    return name.replace(/_/g, '/').replace(/\s/g, '-');
}

export const sortedCategories = (array) => {
    return array.sort((a, b) => {
        const nameA = a.category.toUpperCase(); // ignore upper and lowercase
        const nameB = b.category.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    })
}