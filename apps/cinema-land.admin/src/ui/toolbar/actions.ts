'use server';

import { signOut, auth } from '../../auth';

export async function logout() {
  await signOut({ redirectTo: '/login' });
}

export async function logout2() {
  await auth();
}
