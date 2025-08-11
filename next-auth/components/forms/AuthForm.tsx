'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Loader2, Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onToggleMode: () => void;
}

export function AuthForm({ mode, onToggleMode }: AuthFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
    });
    
    router.push('/');
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isSignup = mode === 'signup';

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle>
          <Heading level={3}>
            {isSignup ? 'Create account' : 'Welcome back'}
          </Heading>
        </CardTitle>
        <CardDescription>
          <Text variant="secondary">
            {isSignup 
              ? 'Enter your details to create your account' 
              : 'Enter your credentials to access your account'
            }
          </Text>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required={isSignup}
                value={formData.name}
                onChange={handleInputChange}
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full transition-all duration-200 hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isSignup ? 'Creating account...' : 'Signing in...'}
              </>
            ) : (
              <>{isSignup ? 'Create account' : 'Sign in'}</>
            )}
          </Button>

          <div className="text-center">
            <Text size="sm" variant="secondary">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={onToggleMode}
                className="text-primary hover:underline font-medium transition-colors"
              >
                {isSignup ? 'Sign in' : 'Sign up'}
              </button>
            </Text>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}