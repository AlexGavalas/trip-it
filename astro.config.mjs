import { defineConfig, envField } from 'astro/config';
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
    experimental: {
        serializeConfig: true,
    },
    env: {
        schema: {
            AUTH_SECRET: envField.string({
                access: 'secret',
                context: 'server',
            }),
            AUTH_TRUST_HOST: envField.boolean({
                access: 'public',
                context: 'server',
            }),
        },
    },
    adapter: cloudflare({
        imageService: 'passthrough',
        platformProxy: {
            persist: true,
            enabled: true,
        },
    }),
    integrations: [auth()],
});
