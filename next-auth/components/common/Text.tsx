interface TextProps {
    text: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'muted';
  }
  
  export function Text({ text, className = '', variant = 'secondary' }: TextProps) {
    const variantStyles = {
      primary: 'text-foreground',
      secondary: 'text-muted-foreground',
      muted: 'text-muted-foreground/70',
    };
  
    return (
      <p className={`${variantStyles[variant]} ${className}`}>
        {text}
      </p>
    );
  }