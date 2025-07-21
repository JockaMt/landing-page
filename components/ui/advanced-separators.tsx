'use client'

// Separadores mais avançados e modernos

export const AdvancedSeparators = {
  // 1. Separador com partículas animadas
  particles: () => (
    <div className="w-full h-32 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  ),

  // 2. Separador com hexágonos
  hexagon: () => (
    <div className="flex justify-center items-center py-12">
      <div className="flex space-x-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 transform rotate-45 border border-primary/40"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  ),

  // 3. Separador com código binário
  matrix: () => (
    <div className="w-full h-24 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 font-mono text-xs text-primary/30 whitespace-nowrap overflow-hidden">
        <div className="animate-scroll-left">
          01001010 01101111 01100011 01101011 01100001 01001101 01010100 
          01001010 01101111 01100011 01101011 01100001 01001101 01010100
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900" />
    </div>
  ),

  // 4. Separador com linha de código
  code: () => (
    <div className="w-full py-8 relative">
      <div className="max-w-2xl mx-auto">
        <div className="bg-zinc-800 rounded-lg p-4 font-mono text-sm border border-zinc-700">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-zinc-500 text-xs ml-2">separator.jsx</span>
          </div>
          <div className="text-zinc-300">
            <span className="text-blue-400">const</span>{' '}
            <span className="text-yellow-300">nextSection</span> = () =&gt; {'{'}
            <br />
            <span className="ml-4 text-green-400">{'// Continue explorando...'}</span>
            <br />
            {'}'}
          </div>
        </div>
      </div>
    </div>
  ),

  // 5. Separador com loading bar
  loading: () => (
    <div className="w-full py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center text-zinc-400 text-sm mb-2">Carregando próxima seção...</div>
        <div className="w-full bg-zinc-800 rounded-full h-1">
          <div className="bg-gradient-to-r from-primary to-red-600 h-1 rounded-full animate-pulse" style={{width: '100%'}}></div>
        </div>
      </div>
    </div>
  ),

  // 6. Separador com circuito
  circuit: () => (
    <div className="w-full h-16 relative overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 100">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(204, 0, 0)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path 
          d="M0,50 L100,50 L120,30 L140,50 L200,50 L220,70 L240,50 L400,50 L420,30 L440,50 L600,50 L620,70 L640,50 L800,50" 
          stroke="url(#circuitGradient)" 
          strokeWidth="2" 
          fill="none"
        />
        <circle cx="120" cy="30" r="3" fill="rgb(204, 0, 0)" opacity="0.7" />
        <circle cx="220" cy="70" r="3" fill="rgb(204, 0, 0)" opacity="0.7" />
        <circle cx="420" cy="30" r="3" fill="rgb(204, 0, 0)" opacity="0.7" />
        <circle cx="620" cy="70" r="3" fill="rgb(204, 0, 0)" opacity="0.7" />
      </svg>
    </div>
  )
};

// CSS adicional necessário para as animações
export const separatorAnimations = `
  @keyframes scroll-left {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  .animate-scroll-left {
    animation: scroll-left 10s linear infinite;
  }
`;
