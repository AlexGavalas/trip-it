import Credentials from '@auth/core/providers/credentials';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize({ email, password }) {
                console.log({ email, password });

                return {
                    email,
                };
            },
        }),
    ],
});
