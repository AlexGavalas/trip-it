import Google from '@auth/core/providers/google';
import Credentials from '@auth/core/providers/credentials';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    providers: [
        Credentials({
            credentials: {
                email: {},
            },
            async authorize({ email }) {
                return {
                    id: '1',
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
