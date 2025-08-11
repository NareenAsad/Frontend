interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'muted';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export function Text({ 
  children, 
  size = 'base', 
  variant = 'primary', 
  weight = 'normal',
  className = '',
  as = 'p'
}: TextProps) {
  const Component = as;
  
  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  
  const variantStyles = {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    muted: 'text-muted-foreground/70',
  };
  
  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  return (
    <Component className={`${sizeStyles[size]} ${variantStyles[variant]} ${weightStyles[weight]} ${className}`}>
      {children}
    </Component>
  );
}