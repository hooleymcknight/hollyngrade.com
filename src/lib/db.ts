import mysql from "mysql2/promise";
import type { Pool } from "mysql2/promise";

const globalForDb = globalThis as unknown as { pool?: Pool };

export const db: Pool =
    globalForDb.pool ??
    mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        charset: "utf8mb4",
    });

if (process.env.NODE_ENV !== "production") globalForDb.pool = db;