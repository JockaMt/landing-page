"use client"

import type React from "react"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animationType?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in"
  delay?: number
  duration?: number
  threshold?: number
  style?: React.CSSProperties
}

export function AnimatedSection({
  children,
  className = "",
  animationType = "fade-in",
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  style = {},
}: AnimatedSectionProps) {
  const { elementRef, shouldAnimate } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
    rootMargin: "-50px",
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"

    if (!shouldAnimate) {
      switch (animationType) {
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "slide-left":
          return `${baseClasses} opacity-0 translate-x-8`
        case "slide-right":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "scale-in":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <section
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </section>
  )
}
