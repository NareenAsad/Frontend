'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PrimaryTitle } from '@/components/common/PrimaryTitle';
import { Text } from '@/components/common/Text';
import { Email } from '@/components/common/Email';
import { Password } from '@/components/common/Password';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

interface SignUpFormProps {
  onToggleMode: () => void;
}

export function SignUpForm({ onToggleMode }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful auth
    login({
      id: '1',
      name: formData.name,
      email: formData.email,
    });
    
    router.push('/home');
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailChange = (value: string) => {
    setFormData(prev => ({ ...prev, email: value }));
  };

  const handlePasswordChange = (value: string) => {
    setFormData(prev => ({ ...prev, password: value }));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setFormData(prev => ({ ...prev, confirmPassword: value }));
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-1">
        <PrimaryTitle text="Create account" />
        <Text text="Enter your details to create your account" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <Email value={formData.email} onChange={handleEmailChange} />
          <Password value={formData.password} onChange={handlePasswordChange} />

          <Password 
            value={formData.confirmPassword} 
            onChange={handleConfirmPasswordChange}
            label="Confirm Password"
          />

          <Button
            text="Continue"
            type="submit"
            loading={isLoading}
          />

          <div className="text-center">
            <Text text="Already have an account? " className="inline" />
            <button
              type="button"
              onClick={onToggleMode}
              className="text-primary hover:underline font-medium transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}