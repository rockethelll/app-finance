'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import EyePassword from '@/components/eye-password';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupSchema } from '@/lib/schemas';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { signUp } from '@/lib/auth-client';

const SignupForm = () => {
  const router = useRouter();
  const [isView, setIsView] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignupSchema) => {
    await signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success('Signed up successfully');
          router.push('/overview');
        },
        onError: (ctx: { error: { message: string } }) => {
          toast.error(ctx.error.message);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Input id="name" type="text" {...register('name')} />
        {errors.name && (
          <p className="mt-1 text-sm text-right text-grey-500">
            {errors.name.message}
          </p>
        )}
      </div>

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
          Create Password
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
        <Button type="submit" className="mb-8" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            'Create an account'
          )}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
