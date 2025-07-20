"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code2,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Server,
  ArrowRight,
  Download,
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useMemo } from "react"
import { AnimatedSection } from "./components/animated-section"
import { StaggeredChildren } from "./components/staggered-children"

export default function PortfolioLanding() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const skills = useMemo(
    () => [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "AWS", category: "Cloud" },
      { name: "Docker", category: "DevOps" },
      { name: "Kubernetes", category: "DevOps" },
      { name: "Git", category: "Tools" },
    ],
    [],
  )

  const projects = useMemo(
    () => [
      {
        title: "Sistema de Gestão Empresarial",
        description:
          "ERP completo para pequenas empresas com módulos de vendas, estoque, financeiro e relatórios avançados.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
        image: "/placeholder.svg?height=200&width=300",
        github: "https://github.com/jocksonduarte/erp-system",
        demo: "https://erp-demo.jocksonduarte.dev",
      },
      {
        title: "Plataforma de E-learning",
        description:
          "Aplicação educacional com streaming de vídeo, quizzes interativos e sistema de progresso do aluno.",
        tech: ["React", "Express", "MongoDB", "Socket.io", "AWS S3"],
        image: "/placeholder.svg?height=200&width=300",
        github: "https://github.com/jocksonduarte/elearning-platform",
        demo: "https://learn.jocksonduarte.dev",
      },
      {
        title: "API de Marketplace",
        description:
          "API REST escalável para marketplace com sistema de pagamentos, avaliações e notificações em tempo real.",
        tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "Stripe"],
        image: "/placeholder.svg?height=200&width=300",
        github: "https://github.com/jocksonduarte/marketplace-api",
        demo: "https://api-docs.jocksonduarte.dev",
      },
    ],
    [],
  )

  const themeStyles = useMemo(
    () =>
      ({
        "--bg-primary": isDarkMode ? "#111827" : "#ffffff",
        "--bg-secondary": isDarkMode ? "#1f2937" : "#f9fafb",
        "--bg-card": isDarkMode ? "#1f2937" : "#ffffff",
        "--text-primary": isDarkMode ? "#ffffff" : "#111827",
        "--text-secondary": isDarkMode ? "#9ca3af" : "#6b7280",
        "--text-muted": isDarkMode ? "#6b7280" : "#9ca3af",
        "--border-color": isDarkMode ? "#374151" : "#e5e7eb",
        "--border-light": isDarkMode ? "#4b5563" : "#d1d5db",
      }) as React.CSSProperties,
    [isDarkMode],
  )

  const aboutItems = useMemo(
    () => [
      {
        icon: Globe,
        title: "Frontend",
        description: "React, Next.js, Vue.js, TypeScript, Tailwind CSS e design responsivo",
      },
      {
        icon: Server,
        title: "Backend",
        description: "Node.js, Python, PostgreSQL, MongoDB, Redis e arquitetura de microsserviços",
      },
      {
        icon: Database,
        title: "DevOps",
        description: "AWS, Docker, Kubernetes, CI/CD, Terraform e monitoramento",
      },
    ],
    [],
  )

  return (
    <div
      className="min-h-screen transition-colors duration-200 ease-out scroll-smooth"
      style={{
        ...themeStyles,
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        willChange: "background-color, color",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm transition-colors duration-200 ease-out"
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: isDarkMode ? "rgba(17, 24, 39, 0.95)" : "rgba(255, 255, 255, 0.95)",
          willChange: "border-color, background-color",
        }}
      >
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2 group">
              <Code2 className="h-6 w-6 transition-all duration-300 group-hover:text-[#D30000] group-hover:animate-float" />
              <span className="font-bold transition-all duration-300 group-hover:text-[#D30000]">Jockson Duarte</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {["sobre", "projetos", "skills", "contato"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="transition-all duration-300 hover:text-[#D30000] relative group capitalize"
                style={{ color: "var(--text-muted)" }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:text-[#D30000] transition-all duration-200 transform hover:scale-110"
              style={{ color: "var(--text-muted)" }}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="group hover:border-[#D30000] transition-all duration-300 bg-transparent"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--text-muted)",
                willChange: "border-color, color",
              }}
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4 group-hover:text-[#D30000] transition-colors duration-300" />
              CV
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection animationType="fade-in" duration={1.2}>
        <section className="container py-24 md:py-32 relative" style={{ scrollSnapAlign: "start" }}>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <AnimatedSection animationType="slide-right" delay={0.3} className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Jockson Duarte
                  <span className="bg-gradient-animated bg-300% bg-clip-text text-transparent animate-gradient-shift block">
                    Fullstack Developer
                  </span>
                </h1>
                <p className="max-w-[600px] md:text-xl" style={{ color: "var(--text-secondary)" }}>
                  Desenvolvedor Fullstack com 4+ anos de experiência criando aplicações web modernas e escaláveis.
                  Especializado em React, Node.js e arquiteturas cloud-native.
                </p>
              </div>
              <div className="flex flex-col justify-center md:items-start md:justify-start md:left-0 gap-2 md:flex-row">
                <Button
                  size="lg"
                  className="h-11 bg-gradient-primary hover:bg-gradient-primary-hover border-0 text-white transition-all duration-300 hover:scale-105"
                >
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 bg-transparent hover:border-[#D30000] hover:text-[#D30000] transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: "var(--border-light)",
                    color: "var(--text-muted)",
                    willChange: "border-color, color",
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Entrar em Contato
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                {[
                  { href: "https://github.com/jocksonduarte", icon: Github },
                  { href: "https://linkedin.com/in/jocksonduarte-dev", icon: Linkedin },
                  { href: "mailto:jockson@exemplo.com", icon: Mail },
                ].map(({ href, icon: Icon }, index) => (
                  <Link key={index} href={href} target={index < 2 ? "_blank" : undefined}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-[#D30000] hover:scale-110 transition-all duration-300"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="slide-left" delay={0.5} className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                  height="400"
                  alt="Developer Portrait"
                  className="aspect-square overflow-hidden rounded-xl object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        id="sobre"
        animationType="slide-up"
        className="container py-24 md:py-32"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h2>
          <p
            className="mt-4 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Desenvolvedor Fullstack formado em Ciência da Computação, com sólida experiência em desenvolvimento web
            moderno. Trabalho principalmente com JavaScript/TypeScript, criando desde interfaces elegantes até APIs
            robustas e infraestrutura escalável na nuvem.
          </p>
        </div>
        <StaggeredChildren
          staggerDelay={0.2}
          animationType="scale-in"
          className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutItems.map((item, index) => (
            <Card
              key={index}
              className="group transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                willChange: "background-color, border-color",
              }}
            >
              <CardHeader>
                <item.icon className="h-10 w-10 text-[#D30000] group-hover:animate-float transition-all duration-300" />
                <CardTitle
                  className="group-hover:text-[#D30000] transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </StaggeredChildren>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection
        id="skills"
        animationType="slide-up"
        className="container py-24 md:py-32 transition-colors duration-200 ease-out"
        style={{
          backgroundColor: "var(--bg-secondary)",
          willChange: "background-color",
          scrollSnapAlign: "start",
        }}
      >
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tecnologias & Skills</h2>
          <p className="mt-4 md:text-xl/relaxed" style={{ color: "var(--text-secondary)" }}>
            Principais tecnologias que utilizo no desenvolvimento de projetos
          </p>
        </div>
        <AnimatedSection animationType="fade-in" delay={0.3} className="mx-auto mt-16 max-w-4xl">
          <StaggeredChildren
            staggerDelay={0.05}
            animationType="scale-in"
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-3 py-1 text-sm hover:bg-gradient-primary hover:text-white transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isDarkMode ? "#374151" : "#f3f4f6",
                  color: "var(--text-muted)",
                  borderColor: "var(--border-light)",
                  willChange: "background-color, color",
                }}
              >
                {skill.name}
              </Badge>
            ))}
          </StaggeredChildren>
        </AnimatedSection>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection
        id="projetos"
        animationType="slide-up"
        className="container py-24 md:py-32"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos em Destaque</h2>
          <p className="mt-4 md:text-xl/relaxed" style={{ color: "var(--text-secondary)" }}>
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>
        <StaggeredChildren
          staggerDelay={0.15}
          animationType="scale-in"
          className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(0, 6).map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden group hover:scale-105 transition-all duration-500"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                willChange: "background-color, border-color, transform",
              }}
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  width="300"
                  height="200"
                  alt={project.title}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle
                  className="line-clamp-1 group-hover:text-[#D30000] transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:border-[#D30000] hover:text-[#D30000] transition-colors duration-300"
                      style={{
                        borderColor: "var(--border-light)",
                        color: "var(--text-muted)",
                        willChange: "border-color, color",
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:border-[#D30000] hover:text-[#D30000] transition-all duration-300"
                    style={{
                      borderColor: "var(--border-light)",
                      color: "var(--text-muted)",
                      willChange: "border-color, color",
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:bg-gradient-primary-hover transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredChildren>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contato"
        animationType="fade-in"
        className="container py-24 md:py-32 transition-colors duration-200 ease-out"
        style={{
          backgroundColor: "var(--bg-secondary)",
          willChange: "background-color",
          scrollSnapAlign: "start",
        }}
      >
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos Conversar?</h2>
          <p className="mt-4 md:text-xl/relaxed" style={{ color: "var(--text-secondary)" }}>
            Interessado em discutir um projeto? Estou disponível para freelances e oportunidades full-time.
          </p>
        </div>
        <AnimatedSection animationType="scale-in" delay={0.4} className="mx-auto mt-16 max-w-2xl">
          <Card
            className="transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              willChange: "background-color, border-color",
            }}
          >
            <CardHeader>
              <CardTitle style={{ color: "var(--text-primary)" }}>Entre em Contato</CardTitle>
              <CardDescription style={{ color: "var(--text-secondary)" }}>
                Preencha o formulário abaixo ou me envie um email diretamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { id: "name", label: "Nome", placeholder: "Seu nome", type: "text" },
                  { id: "email", label: "Email", placeholder: "seu@email.com", type: "email" },
                ].map(({ id, label, placeholder, type }) => (
                  <div key={id} className="space-y-2">
                    <label htmlFor={id} className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                      {label}
                    </label>
                    <Input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="focus:border-[#D30000] focus:ring-[#D30000] transition-colors duration-300"
                      style={{
                        backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                        willChange: "background-color, border-color, color",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                  Assunto
                </label>
                <Input
                  id="subject"
                  placeholder="Assunto da mensagem"
                  className="focus:border-[#D30000] focus:ring-[#D30000] transition-colors duration-300"
                  style={{
                    backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                    willChange: "background-color, border-color, color",
                  }}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Descreva seu projeto ou ideia..."
                  className="min-h-[120px] focus:border-[#D30000] focus:ring-[#D30000] transition-colors duration-300"
                  style={{
                    backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                    willChange: "background-color, border-color, color",
                  }}
                />
              </div>
              <Button className="w-full bg-gradient-primary hover:bg-gradient-primary-hover border-0 text-white transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </AnimatedSection>

      {/* Footer */}
      <footer
        className="border-t py-6 md:py-0 transition-colors duration-200 ease-out"
        style={{
          borderColor: "var(--border-color)",
          willChange: "border-color",
        }}
      >
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code2 className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left" style={{ color: "var(--text-secondary)" }}>
              © 2024 Jockson Duarte. Desenvolvedor Fullstack baseado em Alagoas, Brasil.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {[
              { href: "https://github.com/JockaMt", icon: Github },
              { href: "https://linkedin.com/in/jocka-dev", icon: Linkedin },
              { href: "mailto:jocksonmatheus@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }, index) => (
              <Link key={index} href={href} target={index < 2 ? "_blank" : undefined}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-[#D30000] hover:scale-110 transition-all duration-300"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Icon className="h-4 w-4" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
