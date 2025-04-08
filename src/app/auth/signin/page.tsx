import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { SignInWithGithub } from './SignInWithGithub';
import { auth } from '@/lib/auth';

export default function SignUpPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          We just need a few details to get you started.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form
          className="space-y-5"
          action={async (formData: FormData) => {
            'use server';
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;

            await auth.api.signInEmail({
              body: {
                email,
                password,
              },
            });
          }}
        >
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`email`}>Email</Label>
              <Input
                id={`email`}
                placeholder="hi@yourcompany.com"
                type="email"
                required
                name="email"
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`password`}>Password</Label>
              <Input
                id={`password`}
                placeholder="Enter your password"
                type="password"
                required
                name="password"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
          <span className="text-muted-foreground text-xs">Or</span>
        </div>

        <div className="flex items-center gap-2 justify-">
          <SignInWithGithub />
        </div>

        <p className="text-muted-foreground text-center text-xs">
          No account ?{' '}
          <Link className="text-indigo-500" href="/auth/signup">
            Sing Up
          </Link>
        </p>
        <p className="text-muted-foreground text-center text-xs">
          Forget password ?{' '}
          <Link className="text-indigo-500" href="/auth/reset-password">
            Reset it
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
