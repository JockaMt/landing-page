'use client';

import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionSeparator } from '@/components/ui/section-separator';

export default function ExampleSections() {
  return (
    <div className="min-h-screen">
      
      {/* Seção Hero - já existe na sua page.tsx */}
      <SectionWrapper id="home" background="gradient" paddingY="xl">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="text-primary">JockaMT</span> Portfolio
          </h1>
          <p className="text-xl text-zinc-300">Desenvolvedor Full Stack</p>
        </div>
      </SectionWrapper>

      {/* Separador ondulado */}
      <SectionSeparator variant="wave" />

      {/* Seção About */}
      <SectionWrapper id="about" background="dark" paddingY="lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Sobre Mim</h2>
            <p className="text-zinc-300 leading-relaxed">
              Desenvolvedor apaixonado por criar experiências digitais incríveis...
            </p>
          </div>
          <div className="bg-zinc-800 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
            {/* Conteúdo das skills */}
          </div>
        </div>
      </SectionWrapper>

      {/* Separador com brilho */}
      <SectionSeparator variant="glow" />

      {/* Seção Projects */}
      <SectionWrapper id="projects" background="gradient" paddingY="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meus Projetos</h2>
          <p className="text-zinc-300">Alguns dos meus trabalhos mais recentes</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Grid de projetos */}
        </div>
      </SectionWrapper>

      {/* Separador diagonal */}
      <SectionSeparator variant="diagonal" />

      {/* Seção Contact */}
      <SectionWrapper id="contact" background="glass" paddingY="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Vamos Conversar?</h2>
          <p className="text-zinc-300 mb-8">
            Pronto para transformar sua ideia em realidade?
          </p>
          {/* Form de contato */}
        </div>
      </SectionWrapper>

      {/* Separador de pontos */}
      <SectionSeparator variant="dots" />

    </div>
  );
}
