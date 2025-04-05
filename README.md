# Trip it

An app to organize your next trip! ✈️

## Setup

After cloning, make sure you have the correct tooling versions.

-   Node.js `22.6.0` and npm `10.8.2` at the time of writing. Any Node.js 20.x should work as well.

Then run

1. `npm install` to install the dependencies.
2. `npm run db:migrate:local` to setup the local `dev` database.
3. `npm run db:seed:local` to seed the local `dev` database.

### Environment variables

Add the following values to a `.env` file.

-   `AUTH_SECRET`. Used by the auth library, can be generated with `npx auth secret`
-   `AUTH_TRUST_HOST`. Set to `true` when deploying behind a reverse proxy, e.g. Cloudflare.
-   `AUTH_GOOGLE_ID`. Get it from the Google credentials configuration.
-   `AUTH_GOOGLE_SECRET`. Get it from the Google credentials configuration.

## Development

To start developing, run `npm run dev`.

## Database

This project uses an SQLite database, through different interfaces depending on the environment.

-   In local `dev` it is a local SQLite instance
-   In `preview` it is Cloudflare D1 database, persisted locally.
-   In `prod` it is a Cloudflare D1 database.

### Migrations

To add a new migration

1. Alter the schema in `src/db/schema.ts`
2. Run `npm run db:generate`. This will try to automatically generate a migration file in `migrations`. Check it and adjust it if necessary.
3. Run `npm run db:migrate:local` to apply the migration locally.
4. After verifying it works on the local `dev` environment, apply the migrations to the `preview` environment with `npm run db:migrate:preview`.
5. If the migrations are applied successfully to the `preview` environment, run `npm run db:migrate:prod` to apply them to the `prod` environment.

## Deployment

### Preview

To see the app in a local preview environment run

1. `npm run db:migrate:preview`. Run any pending database migrations.
2. `npm run preview`. This will build the app and start the local Cloudflare worker.

### Production

To manually deploy the app, run `npm run deploy`. After that, the app will be viewable at https://trip-it.pages.dev.
