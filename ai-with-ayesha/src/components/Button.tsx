import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  asChild,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-purple text-white shadow-glow hover:shadow-glow-strong hover:scale-[1.05] active:scale-[0.98]',
    secondary: 'bg-white/40 text-primary-700 border border-primary-200/40 backdrop-blur-[10px] hover:bg-white/60 hover:border-primary-300/50 hover:scale-[1.02]',
    ghost: 'text-primary-500 hover:text-primary-600 hover:bg-primary-50/50',
  };

  const sizes = {
    sm: 'h-12 px-4 text-sm',
    md: 'h-14 px-6 text-base',
    lg: 'h-16 px-8 text-lg',
  };

  const classes = cn(
    'rounded-sm font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden',
    variants[variant],
    sizes[size],
    className
  );

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: cn((children as React.ReactElement).props.className, classes),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
