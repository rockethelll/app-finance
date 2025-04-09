import SignupForm from './signup-form';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <>
      <h1 className="mb-8 text-preset-1">Sign Up</h1>
      <SignupForm />

      <p className="text-center text-preset-4 text-grey-500">
        Already have an account?
        <Link className="ml-2 text-preset-4-bold text-grey-900" href="/login">
          Login
        </Link>
      </p>
    </>
  );
}
