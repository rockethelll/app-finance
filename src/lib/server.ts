'server-only';

import { auth } from '@/lib/auth';
import { LoginSchema, SignupSchema } from './schemas';

export async function loginUser(data: LoginSchema) {
  await auth.api.signInEmail({
    body: data,
  });
}

export async function signupUser(data: SignupSchema) {
  await auth.api.signUpEmail({
    body: data,
  });
}
