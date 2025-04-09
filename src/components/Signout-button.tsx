'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export function SignoutButton() {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push('/login');
            },
          },
        });
      }}
    >
      Sign out
    </Button>
  );
}
