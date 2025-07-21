'use client'

import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'dark' | 'glass';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SectionWrapper = ({ 
  id, 
  children, 
  className = '', 
  background = 'default',
  paddingY = 'lg'
}: SectionWrapperProps) => {
  const backgroundStyles = {
    default: 'bg-zinc-900',
    gradient: 'bg-gradient-to-b from-zinc-900 to-zinc-950',
    dark: 'bg-zinc-950',
    glass: 'bg-zinc-900/90 backdrop-blur-sm'
  };

  const paddingStyles = {
    sm: 'py-16',
    md: 'py-24',
    lg: 'py-32',
    xl: 'py-40'
  };

  return (
    <section 
      id={id}
      className={`
        ${backgroundStyles[background]} 
        ${paddingStyles[paddingY]} 
        relative overflow-hidden
        ${className}
      `}
    >
      {/* Elementos decorativos opcionais */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
