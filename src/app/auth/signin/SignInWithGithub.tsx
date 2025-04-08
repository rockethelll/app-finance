'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { toast } from 'sonner';

export const SignInWithGithub = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      disabled={isLoading}
      onClick={() => {
        authClient.signIn.social(
          {
            provider: 'github',
            callbackURL: '/',
          },
          {
            onRequest: () => {
              setIsLoading(true);
            },
            onSuccess: () => {
              toast.success('Signed in successfully');
              setIsLoading(false);
            },
            onError: (ctx: { error: { message: string } }) => {
              toast.error(ctx.error.message);
              setIsLoading(false);
            },
          },
        );
      }}
    >
      {isLoading ? 'Loading...' : 'Continue with GitHub'}
    </Button>
  );
};
