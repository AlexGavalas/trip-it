import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { getLocalConnection } from '../lib/db';

const connection = await getLocalConnection();

const db = drizzle(connection);

migrate(db, { migrationsFolder: import.meta.dirname + '/../../migrations' });

connection.close();
