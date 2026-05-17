'use server'
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const getDatabase = async (dbName, selects, whereNulls) => {
    const selectObject = { id: true };
    selects.map(s => { selectObject[`${s}`] = true });

    const whereObject = { OR: [] };
    for (const w of whereNulls) {
        let nullObj = {};
        nullObj[`${w}`] = null;
        let emptyObj = {};
        emptyObj[`${w}`] = '';
        whereObject['OR'].push(nullObj, emptyObj);
    }

    const data = await db[`${dbName}`].findMany({
        select: selectObject,
        where: whereObject,
    });
    
    return Array.isArray(data) ? data : [data];
}

export const updateDatabase = async (pushData) => {
    // field (column), value, id

    const transaction = await db.$transaction(
        pushData.updates.map((data) =>
            db.dogs.update({
                where: { id: Number(data.id) },
                data: { [`${data.field}`]: data.value },
            })
        )
    );

    console.log(transaction);
    return transaction;

}