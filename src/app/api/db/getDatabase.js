'use server'
// ---------------------------------------------------------------------------
// SECURITY: admin gating is currently UI-only.
// ---------------------------------------------------------------------------
// GardenJournalFeed hides edit and new-entry affordances when
// session.user.admin is falsy, but the Server Actions in this file
// (updateDatabase, updateGardenDatabase) do NOT verify admin status
// server-side. A motivated visitor could invoke either action directly.
//
// If this site is ever shared beyond personal use, add an admin check at
// the top of updateDatabase before the $transaction call — probably by
// reading the session on the server side via the same auth layer that
// populates session.user.
// ---------------------------------------------------------------------------

// import { PrismaClient } from "@prisma/client"; //  .\node_modules\@prisma\client
import { PrismaClient as PrismaClientHG } from "@/../prisma-hg/hg-client/client"
import { PrismaClient as PrismaClientGL } from "@/../prisma-gl/gl-client/client"

const db = new PrismaClientHG();
const garden_db = new PrismaClientGL();

// ---------------------------------------------------------------------------
// Generic table reader (default HG schema).
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Generic update. Pass `gl = true` to target the garden_log schema instead of
// the default HG schema. Most callers should use the named wrappers below.
// ---------------------------------------------------------------------------
export const updateDatabase = async (pushData, gl) => {
    const schema = gl ? garden_db : db;
    const transaction = await schema.$transaction(
        pushData.updates.map((data) =>
            schema[`${pushData.table}`].update({
                where: { id: Number(data.id) },
                data: { [`${data.field}`]: data.value },
            })
        )
    );

    return transaction;
}

// Thin wrapper so the call site reads as what it is.
export const updateGardenDatabase = async (pushData) => updateDatabase(pushData, true);

