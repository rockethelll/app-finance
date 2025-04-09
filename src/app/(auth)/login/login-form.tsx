'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { loginUser } from '@/lib/server';
import EyePassword from '@/components/eye-password';
import { SignInWithGithub } from './SignInWithGithub';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '@/lib/schemas';

const LoginForm = () => {
  const [isView, setIsView] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await loginUser(data);
    } catch (err) {
      setError('root', {
        message: err instanceof Error ? err.message : 'Something went wrong',
      });
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      {errors.root && (
        <div className="p-3 mb-4 text-sm text-right rounded-md text-grey-500">
          {errors.root.message}
        </div>
      )}
      <div className="mb-4">
        <Label
          htmlFor="email"
          className="mb-1 font-bold text-preset-5-bold text-grey-500"
        >
          Email
        </Label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && (
          <p className="mt-1 text-sm text-right text-grey-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="relative mb-8">
        <Label
          htmlFor="password"
          className="mb-1 font-bold text-preset-5-bold text-grey-500"
        >
          Password
        </Label>
        <Input
          id="password"
          type={isView ? 'text' : 'password'}
          {...register('password')}
        />
        <EyePassword isView={isView} setIsView={setIsView} />
        {errors.password && (
          <p className="mt-1 text-sm text-right text-grey-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Button type="submit" className="mb-2" disabled={isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Login'}
        </Button>
        <SignInWithGithub />
      </div>
    </form>
  );
};

export default LoginForm;
