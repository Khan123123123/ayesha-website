import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'emphasized' | 'subtle';
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = 'standard',
  hover = true,
  ...props
}: GlassCardProps) {
  const variants = {
    standard: 'bg-white/40 border border-primary-100/30 shadow-[0_8px_32px_rgba(156,39,176,0.08)]',
    emphasized: 'bg-white/50 border border-primary-200/40 shadow-[0_8px_32px_rgba(186,104,200,0.12)]',
    subtle: 'bg-white/30 border border-primary-50/25 shadow-[0_4px_16px_rgba(156,39,176,0.06)]',
  };

  return (
    <div
      className={cn(
        'rounded-lg backdrop-blur-[20px] backdrop-saturate-150 transition-all duration-300',
        variants[variant],
        hover && 'hover:-translate-y-2 hover:shadow-glow hover:border-primary-300/40 hover:scale-[1.02]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
