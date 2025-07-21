'use client';
import { Footer } from "@/components/footer";
import { SectionSeparator } from "@/components/ui/section-separator";
import { Projects } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('sobre');
  return (
    <div className="relative bg-zinc-900 text-foreground min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full opacity-20"></div>
      </div>

      <div className="flex flex-1 text-2xl w-full min-h-screen items-center bg-gradient-to-tr from-primary/10 via-transparent to-red-900/20 backdrop-blur-sm border-t border-zinc-800/30 text-white relative">
        <div className="flex items-center justify-center w-full h-full relative">
          {/* Grid pattern sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

          {/* Gradiente overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50"></div>

          {/* Conteúdo principal */}
          <div className="relative flex flex-1 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Lado esquerdo - Conteúdo */}
              <div className="text-left space-y-8">

                {/* Título principal */}
                <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-white">Olá, sou</span>
                    <span className="block bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
                      Jockson Duarte
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300">
                    Desenvolvedor <span className="text-primary">Full Stack</span>
                  </h2>
                </div>

                {/* Descrição */}
                <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                  Transformo ideias em experiências digitais incríveis.
                  Especializado em criar soluções web modernas, performáticas e escaláveis.
                </p>

                {/* CTAs */}
                <div className="flex flex-col text-sm sm:flex-row gap-4 pt-4">
                  <button className="px-6 cursor-pointer py-2 bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform">
                    Vamos conversar 🚀
                  </button>
                  <button className="px-6 cursor-pointer py-2 border border-zinc-600 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-zinc-800/50">
                    Ver meus projetos
                  </button>
                </div>

                {/* Stats ou badges */}
                <div className="flex items-center gap-8 pt-8 border-t border-zinc-700/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-zinc-400">Anos de experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-zinc-400">Projetos entregues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-zinc-400">Clientes satisfeitos</div>
                  </div>
                </div>
              </div>

              {/* Lado direito - Espaço reservado para foto */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-3xl border border-zinc-700/50 flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <div className="w-24 h-24 bg-zinc-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Espaço reservado para sua foto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <SectionSeparator />

      <section className="relative w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-900 py-20 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-primary/3 to-transparent rounded-full opacity-30"></div>
        </div>

        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:50px_50px] opacity-15"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-primary bg-clip-text text-transparent">
                Conheça Minha Jornada
              </span>
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Descubra mais sobre minha trajetória, experiências e as tecnologias que domino.
            </p>
          </div>

          {/* Tabs Container */}
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50">
              <button 
                onClick={() => setActiveTab('sobre')}
                className={`px-8 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'sobre' 
                    ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg shadow-primary/25' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-700/50'
                }`}
              >
                Sobre
              </button>
              <button 
                onClick={() => setActiveTab('historia')}
                className={`px-8 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'historia' 
                    ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg shadow-primary/25' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-700/50'
                }`}
              >
                História
              </button>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`px-8 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'skills' 
                    ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg shadow-primary/25' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-700/50'
                }`}
              >
                Skills
              </button>
            </div>

            {/* Tab Content */}
            <div className="relative bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-8 min-h-[400px]">
              
              {/* Sobre Tab */}
              {activeTab === 'sobre' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">Desenvolvedor Full Stack Apaixonado</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Sou um desenvolvedor full stack com mais de 3 anos de experiência, 
                        especializado em criar soluções web modernas e escaláveis. 
                        Tenho paixão por transformar ideias complexas em experiências digitais intuitivas.
                      </p>
                      <p className="text-zinc-300 leading-relaxed">
                        Meu foco está sempre na qualidade do código, performance das aplicações 
                        e na experiência do usuário final. Acredito que a tecnologia deve ser uma 
                        ferramenta para resolver problemas reais das pessoas.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-zinc-800/50 p-4 rounded-lg">
                        <h4 className="text-primary font-semibold mb-2">Localização</h4>
                        <p className="text-zinc-300">Brasil 🇧🇷</p>
                      </div>
                      <div className="bg-zinc-800/50 p-4 rounded-lg">
                        <h4 className="text-primary font-semibold mb-2">Disponibilidade</h4>
                        <p className="text-zinc-300">Disponível para freelances e projetos</p>
                      </div>
                      <div className="bg-zinc-800/50 p-4 rounded-lg">
                        <h4 className="text-primary font-semibold mb-2">Especialidade</h4>
                        <p className="text-zinc-300">Desenvolvimento Web Full Stack</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* História Tab */}
              {activeTab === 'historia' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white text-center">Minha Jornada Profissional</h3>
                  
                  <div className="space-y-6">
                    {/* Timeline */}
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-red-600"></div>
                      
                      <div className="space-y-8">
                        <div className="relative flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-zinc-800/50 p-4 rounded-lg">
                            <h4 className="text-primary font-semibold">2024 - Presente</h4>
                            <h5 className="text-white font-medium">Desenvolvedor Full Stack Freelancer</h5>
                            <p className="text-zinc-300 text-sm mt-2">
                              Desenvolvimento de aplicações web completas, desde o planejamento até a implementação, 
                              focando em performance e experiência do usuário.
                            </p>
                          </div>
                        </div>

                        <div className="relative flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-zinc-800/50 p-4 rounded-lg">
                            <h4 className="text-primary font-semibold">2022 - 2024</h4>
                            <h5 className="text-white font-medium">Desenvolvedor Front-end</h5>
                            <p className="text-zinc-300 text-sm mt-2">
                              Especialização em React, Next.js e TypeScript. Desenvolvimento de interfaces 
                              modernas e responsivas com foco em UX/UI.
                            </p>
                          </div>
                        </div>

                        <div className="relative flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-zinc-800/50 p-4 rounded-lg">
                            <h4 className="text-primary font-semibold">2021 - 2022</h4>
                            <h5 className="text-white font-medium">Início da Jornada</h5>
                            <p className="text-zinc-300 text-sm mt-2">
                              Primeiros passos no desenvolvimento web. Aprendizado das tecnologias fundamentais: 
                              HTML, CSS, JavaScript e frameworks modernos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white text-center">Minhas Tecnologias</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                        <span>🎨</span> Frontend
                      </h4>
                      <div className="space-y-3">
                        {[
                          { name: 'React & Next.js', level: 90 },
                          { name: 'TypeScript', level: 85 },
                          { name: 'Tailwind CSS', level: 95 },
                          { name: 'JavaScript (ES6+)', level: 90 }
                        ].map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-primary">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-zinc-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-primary to-red-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                        <span>⚙️</span> Backend & Ferramentas
                      </h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Node.js & Express', level: 80 },
                          { name: 'Python & FastAPI', level: 75 },
                          { name: 'PostgreSQL & MongoDB', level: 70 },
                          { name: 'Git & Docker', level: 85 }
                        ].map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-primary">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-zinc-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-primary to-red-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Certificações ou Outros */}
                  <div className="mt-8 p-6 bg-zinc-800/30 rounded-lg border border-zinc-700/30">
                    <h4 className="text-lg font-semibold text-white mb-4">Outros Conhecimentos</h4>
                    <div className="flex flex-wrap gap-2">
                      {['UI/UX Design', 'SEO', 'Web Performance', 'API REST', 'GraphQL', 'AWS', 'Vercel', 'Linux'].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm bg-primary/20 text-primary border border-primary/30 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>


      <SectionSeparator variant="geometric" />


      <section className="relative w-full bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 py-20 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-600/5 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-primary bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Aqui estão alguns dos meus projetos mais recentes, desenvolvidos com 
              <span className="text-primary font-semibold"> tecnologias modernas</span> e foco em 
              <span className="text-primary font-semibold"> performance e usabilidade</span>.
            </p>

            {/* Linha decorativa */}
            <div className="mt-8 flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
          </div>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((project, index) => (
              <div 
                key={project.id} 
                className="relative bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 group overflow-hidden hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Fundo com blur e gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-black/60 backdrop-blur-sm"></div>
                
                {/* Borda brilhante no hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border border-primary/30 shadow-[0_0_20px_rgba(204,0,0,0.3)]"></div>
                </div>

                <div className="relative">
                  {/* Imagem do projeto */}
                  <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={`Projeto ${project.title}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
                  </div>

                  {/* Conteúdo do card */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags de tecnologias */}
                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/80 hover:bg-primary/20 hover:text-primary border border-zinc-700/50 hover:border-primary/30 rounded-full transition-all duration-300 cursor-default"
                          style={{
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium text-zinc-500 bg-zinc-800/50 border border-zinc-700/30 rounded-full">
                          +{project.skills.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Botão de ação */}
                    <div className="pt-2">
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-red-600/20 hover:from-primary/30 hover:to-red-600/30 border border-primary/40 hover:border-primary/60 text-primary hover:text-white rounded-xl text-sm font-semibold transition-all duration-300 group/btn"
                      >
                        <span>Ver Projeto</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action no final */}
          <div className="text-center mt-16">
            <p className="text-zinc-400 mb-6">Gostou do que viu? Vamos conversar sobre seu projeto!</p>
            <button onClick={() => window.location.href = 'https://wa.link/1sdj1y'} className="px-4 cursor-pointer py-2 bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform">
              Entrar em Contato 🚀
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
