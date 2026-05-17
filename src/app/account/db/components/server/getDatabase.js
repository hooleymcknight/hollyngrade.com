'use server'
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const getDatabase = async (dbName) => {
    console.log(dbName)


    const data = await db[`${dbName}`].findMany({
        select: { id: true, src: true, alt: true, title: true, description: true, data_tags: true, active: true, }
    });
    
    return Array.isArray(data) ? data : [data];
}