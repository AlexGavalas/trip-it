import { type DrizzleD1Database, drizzle } from 'drizzle-orm/d1';
import {
    type BetterSQLite3Database,
    drizzle as localDrizzle,
} from 'drizzle-orm/better-sqlite3';
import BetterSqlite3Database from 'better-sqlite3';

export const getLocalConnection = () => {
    return new BetterSqlite3Database('local.sqlite', {
        fileMustExist: false,
    });
};

export const getDb = (
    d1Instance: D1Database
): DrizzleD1Database | BetterSQLite3Database => {
    if (process.env.NODE_ENV === 'development') {
        const localConnection = getLocalConnection();

        return localDrizzle(localConnection);
    }

    return drizzle(d1Instance);
};
