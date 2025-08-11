interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'muted';
}

export function Heading({ level, children, className = '', variant = 'primary' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = 'font-semibold tracking-tight';
  
  const sizeStyles = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };
  
  const variantStyles = {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    muted: 'text-muted-foreground/80',
  };
  
  return (
    <Tag className={`${baseStyles} ${sizeStyles[level]} ${variantStyles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}