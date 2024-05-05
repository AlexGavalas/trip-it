import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            external: ['node:path'],
        },
    },
    output: 'server',
    adapter: cloudflare({
        imageService: 'passthrough',
        platformProxy: {
            enabled: true,
        },
    }),
    integrations: [auth()],
});
