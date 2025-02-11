import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';

interface User {
  email: string;
  password: string;
}

async function getUser(email: string): Promise<User | undefined> {
  return { email: 'admin@cinemaland.ru', password: '1234' };
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = password === user.password;

          if (passwordsMatch) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
});
