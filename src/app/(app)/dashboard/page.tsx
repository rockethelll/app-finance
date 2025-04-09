import { SignoutButton } from '@/components/Signout-button';
import { getUser } from '@/lib/auth-session';
import Link from 'next/link';

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <div className='p-16'>
      {user?.email}
      <br />
      {user?.name}
      <br />
      {user?.image && <img src={user?.image} alt="user image" />}
      <br />
      {user?.emailVerified}
      <br />
      <SignoutButton />
      <div className="flex mt-8 gap-4">
        <Link href="/login">Login</Link>
        <Link href="/signup ">Signup</Link>
      </div>
    </div>
  );
}
