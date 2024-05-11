import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            external: ['node:path', 'better-sqlite3'],
        },
    },
    output: 'server',
    adapter: cloudflare({
        imageService: 'passthrough',
        platformProxy: {
            persist: true,
            enabled: true,
        },
    }),
    integrations: [auth()],
});
