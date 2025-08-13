interface PrimaryTitleProps {
    text: string;
    className?: string;
  }
  
  export function PrimaryTitle({ text, className = '' }: PrimaryTitleProps) {
    return (
      <h1 className={`text-2xl md:text-3xl font-semibold text-foreground mb-2 ${className}`}>
        {text}
      </h1>
    );
  }