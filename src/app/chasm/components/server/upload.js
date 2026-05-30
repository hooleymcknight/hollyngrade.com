"use server";
import fs from 'fs';
import path from 'path';

const publicPath = path.join(process.cwd(), 'public');

const preview = (story) => {
    // first split any subsequent new lines
    let storyPreview = story.includes('\n') ? story.split('\n')[0] : story;
    // if it is > 60 characters, cut it down to 50 (leaving room for the ... and the Story:)
    if (storyPreview.length > 60) {
        storyPreview = storyPreview.substr(0, 50)
        // if we cut it down, make sure we don't take any partial words.
        let words = storyPreview.split(' ');
        words.pop(words.at(-1)); // ditch the last word. it may not be partial but who cares.
        storyPreview = words.join(' ') + '...';
    }
    return storyPreview;
}

const getImageData = async (file, dateString) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileNameBeforeExt = file.name.split('.')?.slice(0, -1).join('-');
    const ext = file.name.split('.')?.at(-1);
    const fileName = `${fileNameBeforeExt}_${dateString}.${ext}`;
    return { buffer: buffer, fileName: fileName };
}

export async function uploadMemory(formData) {
    const files = formData.getAll("image"); // it says image bc that's the id name, but this could also be a video
    const story = formData.get('story');
    if (!files?.length && !story) return { error: "No file uploaded" };

    /**
     * handle story first. there's only one max.
     */
    const dateString = String(new Date().toISOString().replace(/:|\./g, '-'));
    let imageUploaded = false;

    try {
        for (const file of files) {
            console.log(file.name, file)
            const { buffer, fileName } = await getImageData(file, dateString);
            if (buffer?.length) {
                imageUploaded = true;
                fs.writeFileSync(publicPath + '/uploads/' + fileName, buffer);
            }
        }
        if (story?.length) {
            fs.writeFileSync(publicPath + '/uploads/' + `story-${dateString}.txt`, story);
        }
        return { success: true, body: story?.length ? `Story: ${preview(story)}` : imageUploaded ? 'Someone has uploaded a photo memory.' : false };
    }
    catch (err) {
        console.error("Error uploading image.", err);
        return { success: false };
    }
}