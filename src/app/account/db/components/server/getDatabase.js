'use server'
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const getDatabase = async (dbName, selects, whereNulls) => {
    let query = {};

    if (selects?.length) {
        const selectObject = { id: true };
        selects.map(s => { selectObject[`${s}`] = true });
        query.select = selectObject;
    }

    if (whereNulls?.length) {
        const whereObject = { OR: [] };
        for (const w of whereNulls) {
            let nullObj = {};
            nullObj[`${w}`] = null;
            let emptyObj = {};
            emptyObj[`${w}`] = '';
            whereObject['OR'].push(nullObj, emptyObj);
        }
        query.where = whereObject;
    }

    if (!Object.keys(query).length) return `Incomplete query.`;

    try {
        const data = await db[`${dbName}`].findMany(query);
        return Array.isArray(data) ? data : [data];
    }
    catch (err) {
        return `Error retrieving database: ${err}`;
    }
}

export const updateDatabase = async (pushData) => {
    // field (column), value, id

    const transaction = await db.$transaction(
        pushData.updates.map((data) =>
            db[`${pushData.table}`].update({
                where: { id: Number(data.id) },
                data: { [`${data.field}`]: data.value },
            })
        )
    );

    return transaction;

}