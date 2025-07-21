'use client';

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-t from-black via-zinc-950 to-zinc-900 border-t border-zinc-800/50 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>

      <div className="relative z-10">
        {/* Seção principal do footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Coluna 1 - Sobre */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <h3 className="text-xl font-bold text-white">Jockson Duarte</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis. 
                Transformando ideias em soluções web modernas e escaláveis.
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                  🚀 Disponível para projetos
                </span>
              </div>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#sobre" className="text-zinc-400 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="text-zinc-400 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-zinc-400 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-zinc-400 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Redes Sociais */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Conecte-se</h4>
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/jocka-dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-zinc-800/50 group-hover:bg-[#0077B5] rounded-lg flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/JockaMT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-zinc-800/50 group-hover:bg-[#333] rounded-lg flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span>GitHub</span>
                </a>

                <a 
                  href="mailto:jocksonmatheus@gmail.com" 
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-zinc-800/50 group-hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Coluna 4 - Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Fique por dentro</h4>
              <p className="text-zinc-400 text-sm">
                Receba atualizações sobre novos projetos e artigos diretamente no seu email.
              </p>
              <div className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Seu email"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-[1.02]">
                  Inscrever-se
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <span>© 2025 JockaMT.</span>
                <span className="hidden md:inline">Todos os direitos reservados.</span>
              </div>

              {/* Tecnologias utilizadas */}
              <div className="flex items-center gap-4 text-zinc-500 text-sm">
                <span className="hidden md:inline">Feito com</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#61DAFB] rounded flex items-center justify-center">
                    <span className="text-[10px] font-bold text-black">R</span>
                  </div>
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                    <span className="text-[10px] font-bold text-black">N</span>
                  </div>
                  <span>Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#06B6D4] rounded flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">TW</span>
                  </div>
                  <span>Tailwind</span>
                </div>
              </div>

              {/* Link para o topo */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-primary bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg transition-all duration-300 group"
              >
                <span className="text-sm">Voltar ao topo</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
