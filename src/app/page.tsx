'use client';

import { SignoutButton } from '@/components/Signout-button';
import { authClient } from '@/lib/auth-client';

export default function Home() {
  const { data: session } = authClient.useSession();
  console.log(session?.user);
  return (
    <div>
      {session?.user?.email}
      <br />
      {session?.user?.name}
      <br />
      {session?.user?.image && <img src={session?.user?.image} alt='user image' />}
      <br />
      {session?.user?.emailVerified}
      <br />
      <SignoutButton />
    </div>
  );
}
