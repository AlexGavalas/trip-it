import { drizzle } from 'drizzle-orm/better-sqlite3';
import { getLocalConnection } from '../lib/db';
import { trip } from './schema';

const connection = getLocalConnection();

const db = drizzle(connection);

// Clear the tables
db.delete(trip).execute();

// Seed the tables
db.insert(trip).values({ name: 'To the moon' }).execute();

connection.close();
