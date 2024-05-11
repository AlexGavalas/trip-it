import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const trip = sqliteTable('trips', {
    id: integer('id').primaryKey({
        autoIncrement: true,
    }),
    name: text('name').notNull(),
});
