'use client';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignupForm';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onToggleMode: () => void;
}

export function AuthForm({ mode, onToggleMode }: AuthFormProps) {


  if (mode === 'signup') {
    return <SignUpForm onToggleMode={onToggleMode} />;
  }
  
  return <SignInForm onToggleMode={onToggleMode} />;
}