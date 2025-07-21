'use client'

interface SectionSeparatorProps {
  variant?: 'gradient' | 'wave' | 'diagonal' | 'dots' | 'geometric' | 'glow' | 'zigzag' | 'curve';
  className?: string;
}

export const SectionSeparator = ({ variant = 'gradient', className = '' }: SectionSeparatorProps) => {
  const separators = {
    // 1. Separador com gradiente sutil
    gradient: (
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent ${className}`} />
    ),

    // 2. Separador com ondas
    wave: (
      <div className={`w-full h-16 relative overflow-hidden ${className}`}>
        <svg 
          className="absolute bottom-0 w-full h-16 text-primary/10" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    ),

    // 3. Separador diagonal
    diagonal: (
      <div className={`w-full h-16 relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transform -skew-y-1" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    ),

    // 4. Separador com pontos
    dots: (
      <div className={`flex justify-center items-center py-8 ${className}`}>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    ),

    // 5. Separador geométrico
    geometric: (
      <div className={`flex justify-center items-center py-8 ${className}`}>
        <div className="relative">
          <div className="w-16 h-16 border-2 border-primary/30 rotate-45" />
          <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-transparent rotate-45" />
        </div>
      </div>
    ),

    // 6. Separador com brilho
    glow: (
      <div className={`w-full h-24 relative overflow-hidden ${className}`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent blur-lg" />
      </div>
    ),

    // 7. Separador zigzag
    zigzag: (
      <div className={`w-full h-8 relative overflow-hidden ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path 
            d="M0,5 L10,0 L20,5 L30,0 L40,5 L50,0 L60,5 L70,0 L80,5 L90,0 L100,5 L90,10 L80,5 L70,10 L60,5 L50,10 L40,5 L30,10 L20,5 L10,10 L0,5 Z" 
            fill="url(#zigzagGradient)"
          />
          <defs>
            <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgb(204, 0, 0)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),

    // 8. Separador curvo
    curve: (
      <div className={`w-full h-20 relative overflow-hidden ${className}`}>
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="url(#curveGradient)" 
            opacity="0.3"
          />
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgb(204, 0, 0)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  };

  return separators[variant];
};
