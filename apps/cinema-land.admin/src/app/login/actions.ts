'use server';

import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
import { User } from './type';

export async function login(formData: User) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        isError: true,
        isUserNotFoundError: error.type === 'CredentialsSignin',
      };
    }
    throw error;
  }
}
