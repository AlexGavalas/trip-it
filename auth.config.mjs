import { AUTH_SECRET, AUTH_TRUST_HOST } from 'astro:env/server';
import Credentials from '@auth/core/providers/credentials';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    trustHost: AUTH_TRUST_HOST,
    secret: AUTH_SECRET,
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email' },
            },
            async authorize({ email }) {
                if (typeof email !== 'string') {
                    return null;
                }

                return {
                    id: '1',
                    name: 'User',
                    email,
                };
            },
        }),
    ],
});
