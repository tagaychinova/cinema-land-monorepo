import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { loginFormSchema } from './validation';
import { userStore } from '@stores';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = loginFormSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const user = await userStore.getUser(parsedCredentials.data);
          if (user) {
            return {
              email: user.email,
            };
          }
        }

        return null;
      },
    }),
  ],
});
