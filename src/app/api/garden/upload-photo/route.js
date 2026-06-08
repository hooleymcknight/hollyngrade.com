import { writeFile, mkdir } from "fs/promises";
import { randomUUID } from "crypto";
import path from "path";
import { NextResponse } from "next/server";

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const EXT_BY_TYPE = {
    "image/jpeg": "jpg",
    "image/png":  "png",
    "image/webp": "webp",
};

const PHOTOS_ROOT = process.env.PHOTOS_ROOT || "./public/photos";

const getDate = () => {
    const date = new Date();
    const yyyy = String(date.getFullYear()).padStart(4, 0);
    const mm = String(date.getMonth() + 1).padStart(2, 0);
    return { yyyy, mm };
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        // 1. validate: file exists, type allowed, size under MAX_SIZE
        const ext = EXT_BY_TYPE[file.type];
        if (!ext) {
            return NextResponse.json({ error: "Only JPEG, PNG, and WebP allowed" }, { status: 400 });
        }
        if (!file || typeof file === "string") {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }
        if (file.size > MAX_SIZE) {
            return NextResponse.json({ error: `File exceeds ${MAX_SIZE / 1024 / 1024}MB limit` }, { status: 400 });
        }

        // 2. work out the extension from file.type (use EXT_BY_TYPE)
        const { yyyy, mm } = getDate();
        const filename = `${randomUUID()}.${ext}`;
        
        // 3. build absolute write path: path.join(PHOTOS_ROOT, "entries", yyyy, mm)
        const dest = path.join(PHOTOS_ROOT, 'entries', yyyy, mm);
        await mkdir(dest, {recursive: true});
        await writeFile(dest + '/' + filename, Buffer.from(await file.arrayBuffer()));
        //    write the file: writeFile(fullPath, Buffer.from(await file.arrayBuffer()))
        
        // 4. build the public URL: `/photos/entries/${yyyy}/${mm}/${filename}`
        const publicUrl = `/photos/entries/${yyyy}/${mm}/${filename}`;
        return NextResponse.json({ url: publicUrl });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}