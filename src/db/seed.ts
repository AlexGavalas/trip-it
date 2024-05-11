import { drizzle } from 'drizzle-orm/better-sqlite3';
import { getLocalConnection } from '../lib/db';
import { trip } from './schema';

const connection = await getLocalConnection();

const db = drizzle(connection);

// Clear the tables
await db.delete(trip).execute();

// Seed the tables
await db.insert(trip).values({ name: 'To the moon' }).execute();
