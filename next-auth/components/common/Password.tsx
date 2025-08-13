'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export function Password({ 
  value, 
  onChange, 
  label = 'Password',
  placeholder = '••••••••',
  className = '' 
}: PasswordProps) {
  const [password, setPassword] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor="password">{label}</Label>
      <div className="relative">
        <Input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          required
          value={password}
          onChange={handleChange}
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
  );
}