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

export async function uploadMemory(formData) {
    const file = formData.get("image");
    const story = formData.get('story');
    if (!file && !story) return { error: "No file uploaded" };

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const dateString = String(new Date().toISOString().replace(/:|\./g, '-'));
    const fileNameBeforeExt = file.name.split('.')?.slice(0, -1).join('-');
    const ext = file.name.split('.')?.at(-1);

    const fileName = `${fileNameBeforeExt}_${dateString}.${ext}`;
    const storyName = `story-${dateString}.txt`;
    // console.log("File received:", file.name);
    // console.log("story received:", storyName);

    try {
        if (buffer?.length) {
            fs.writeFileSync(publicPath + '/uploads/' + fileName, buffer);
        }
        if (story?.length) {
            fs.writeFileSync(publicPath + '/uploads/' + storyName, story);
        }
        return { success: true, body: story?.length ? `Story: ${preview(story)}` : buffer?.length ? 'Someone has uploaded a photo memory.' : false };
    }
    catch (err) {
        console.error("Error uploading image.", err);
        return { success: false };
    }
}