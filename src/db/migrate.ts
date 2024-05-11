import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { getLocalConnection } from '../lib/db';

const connection = getLocalConnection();

const db = drizzle(connection);

migrate(db, { migrationsFolder: '../../migrations' });

connection.close();