'use server';

import { signIn } from '../../auth';
import { AuthError } from 'next-auth';

interface User {
  email: string;
  password: string;
}

export async function login(formData: User) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
