'use client';

import { Button as UIButton } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  loading?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ 
  text, 
  href, 
  onClick, 
  loading = false,
  variant = 'default',
  size = 'default',
  className = '',
  type = 'button'
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <UIButton
      type={type}
      variant={variant}
      size={size}
      className={`w-full transition-all duration-200 hover:scale-[1.02] ${className}`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        text
      )}
    </UIButton>
  );
}