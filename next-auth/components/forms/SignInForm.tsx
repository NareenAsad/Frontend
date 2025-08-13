'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PrimaryTitle } from '@/components/common/PrimaryTitle';
import { Text } from '@/components/common/Text';
import { Email } from '@/components/common/Email';
import { Password } from '@/components/common/Password';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

interface SignInFormProps {
  onToggleMode: () => void;
}

export function SignInForm({ onToggleMode }: SignInFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful auth
    login({
      id: '1',
      name: formData.email.split('@')[0],
      email: formData.email,
    });
    
    router.push('/home');
    setIsLoading(false);
  };

  const handleEmailChange = (value: string) => {
    setFormData(prev => ({ ...prev, email: value }));
  };

  const handlePasswordChange = (value: string) => {
    setFormData(prev => ({ ...prev, password: value }));
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-1">
        <PrimaryTitle text="Welcome back" />
        <Text text="Enter your credentials to access your account" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Email value={formData.email} onChange={handleEmailChange} />
          <Password value={formData.password} onChange={handlePasswordChange} />

          <Button
            text="Continue"
            type="submit"
            loading={isLoading}
          />

          <div className="text-center">
            <Text text="Don't have an account? " className="inline" />
            <button
              type="button"
              onClick={onToggleMode}
              className="text-primary hover:underline font-medium transition-colors"
            >
              Sign up
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}