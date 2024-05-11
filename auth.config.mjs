import Google from '@auth/core/providers/google';
import Credentials from '@auth/core/providers/credentials';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    secret: import.meta.env.AUTH_SECRET,
    providers: [
        Credentials({
            credentials: {
                email: {},
            },
            async authorize({ email }) {
                return {
                    id: '1',
                    name: 'User',
                    email,
                };
            },
        }),
        Google({
            clientId: import.meta.env.AUTH_GOOGLE_ID,
            clientSecret: import.meta.env.AUTH_GOOGLE_SECRET,
        }),
    ],
});
