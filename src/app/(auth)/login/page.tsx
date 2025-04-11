import Link from 'next/link';
import LoginForm from './login-form';

export default function LoginPage() {
  return (
    <>
      <h1 className="mb-8 custom-text-preset-1">Login</h1>
      <LoginForm />

      <p className="text-center custom-text-preset-* text-grey-500">
        No account?
        <Link
          className="ml-2 custom-text-preset-4-bold text-grey-900"
          href="/signup"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
