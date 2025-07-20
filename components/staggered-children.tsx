"use client"

import React from "react"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

interface StaggeredChildrenProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  animationType?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in"
  threshold?: number
}

export function StaggeredChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  animationType = "slide-up",
  threshold = 0.1,
}: StaggeredChildrenProps) {
  const { elementRef, shouldAnimate } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
    rootMargin: "-30px",
  })

  const getChildAnimationClasses = (index: number) => {
    const baseClasses = "transition-all duration-700 ease-out"
    const delay = shouldAnimate ? index * staggerDelay : 0

    if (!shouldAnimate) {
      switch (animationType) {
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-up":
          return `${baseClasses} opacity-0 translate-y-6`
        case "slide-left":
          return `${baseClasses} opacity-0 translate-x-6`
        case "slide-right":
          return `${baseClasses} opacity-0 -translate-x-6`
        case "scale-in":
          return `${baseClasses} opacity-0 scale-90`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={elementRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={getChildAnimationClasses(index)}
          style={{
            transitionDelay: shouldAnimate ? `${index * staggerDelay}s` : "0s",
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
