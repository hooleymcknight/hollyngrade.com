"use server";
import fs from 'fs';
import path from 'path';

const publicPath = path.join(process.cwd(), 'public');

export async function uploadMemory(formData) {
    const file = formData.get("image");
    const story = formData.get('story');
    if (!file && !story) return { error: "No file uploaded" };

    // Example: Convert to Buffer for processing
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Here you would save the buffer to S3, Cloudinary, or a local folder
    const storyName = `story-${(new Date().toISOString().replace(/:|\./g, '-'))}.txt`;
    console.log("File received:", file.name);
    console.log("story received:", storyName);
    try {
        fs.writeFileSync(publicPath + '/uploads/' + file.name, buffer);
        fs.writeFileSync(publicPath + '/uploads/' + storyName, story);
        return { success: true };
    }
    catch (err) {
        console.error("Error uploading image.", err);
        return { success: false };
    }
}