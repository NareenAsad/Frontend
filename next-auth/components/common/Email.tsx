'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EmailProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Email({ value, onChange, className = '' }: EmailProps) {
  const [email, setEmail] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="john@example.com"
        required
        value={email}
        onChange={handleChange}
        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}