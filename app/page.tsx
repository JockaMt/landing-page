import { Database, Globe, Server } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

export default function Page() {
  // DarkTheme state
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Check localStorage for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  // Skills data
  const skills = useMemo(
    () => [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Rust", category: "Backend" },
      { name: "shadcn/ui", category: "Frontend" },
      { name: "Flask", category: "Backend" },
      { name: "Django", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Docker", category: "DevOps" },
      { name: "Git", category: "Tools" },
    ],
    [],
  )

  // Projects data
  const projects = useMemo(
    () => [
      {
        title: "Sistema de Gestão Empresarial",
        description:
          "ERP completo para pequenas empresas com módulos de vendas, estoque, financeiro e relatórios avançados.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
        image: "/placeholder.svg?height=200&width=300",
        github: "https://github.com/JockaMt/erp-system",
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

  // Theme styles
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
    
  )
}
