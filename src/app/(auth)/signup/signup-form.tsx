'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { signupUser } from '@/lib/server';
import EyePassword from '@/components/eye-password';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupSchema } from '@/lib/schemas';

const SignupForm = () => {
  const [isView, setIsView] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignupSchema) => {
    try {
      await signupUser(data);
    } catch (err) {
      setError('root', {
        message: err instanceof Error ? err.message : 'Something went wrong',
      });
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      {errors.root && (
        <div className="p-3 mb-4 text-sm text-right rounded-md text-grey-500 bg-red-50">
          {errors.root.message}
        </div>
      )}
      <div className="mb-4">
        <Label
          htmlFor="email"
          className="mb-1 font-bold text-preset-5-bold text-grey-500"
        >
          Name
        </Label>
        <Input
          id="name"
          type="text"
          {...register('name')}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-right text-grey-500">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <Label
          htmlFor="email"
          className="mb-1 font-bold text-preset-5-bold text-grey-500"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-right text-grey-500">{errors.email.message}</p>
        )}
      </div>

      <div className="relative mb-8">
        <Label
          htmlFor="password"
          className="mb-1 font-bold text-preset-5-bold text-grey-500"
        >
          Create Password
        </Label>
        <Input
          id="password"
          type={isView ? 'text' : 'password'}
          {...register('password')}
        />
        <EyePassword isView={isView} setIsView={setIsView} />
        {errors.password && (
          <p className="mt-1 text-sm text-right text-grey-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Button type="submit" className="mb-8" disabled={isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Sign Up'}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
