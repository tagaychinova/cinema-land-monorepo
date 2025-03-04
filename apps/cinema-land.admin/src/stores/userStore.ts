import prisma from '@cinema-land-monorepo/db';
import bcrypt from 'bcrypt';

async function getUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const dbUser = await prisma.user.findFirst({
    where: {
      email,
      password: await bcrypt.hash(password, `${process.env.BCRYPT_SALT}`),
    },
  });

  return dbUser;
}

export const userStore = Object.freeze({
  getUser,
});
