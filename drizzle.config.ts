import type { Config } from 'drizzle-kit';

const { LOCAL_DB_PATH = 'local.sqlite' } = process.env;

export default {
    schema: './src/db/schema.ts',
    driver: 'better-sqlite',
    out: './migrations',
    verbose: true,
    dbCredentials: {
        url: LOCAL_DB_PATH,
    },
} satisfies Config;
