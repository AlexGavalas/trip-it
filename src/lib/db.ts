import { type DrizzleD1Database, drizzle } from 'drizzle-orm/d1';
import {
    type BetterSQLite3Database,
    drizzle as localDrizzle,
} from 'drizzle-orm/better-sqlite3';

export const getLocalConnection = async () => {
    const { default: BetterSqlite3Database } = await import('better-sqlite3');

    return new BetterSqlite3Database('local.sqlite', {
        fileMustExist: false,
    });
};

export const getDb = async (
    d1Instance: D1Database
): Promise<DrizzleD1Database | BetterSQLite3Database> => {
    if (process.env.NODE_ENV === 'development') {
        const localConnection = await getLocalConnection();

        return localDrizzle(localConnection);
    }

    return drizzle(d1Instance);
};
