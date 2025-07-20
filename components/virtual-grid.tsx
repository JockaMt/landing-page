"use client"

import React, { useMemo } from "react"

interface VirtualGridProps<T> {
  items: T[]
  itemHeight: number
  containerHeight: number
  columns: number
  renderItem: (item: T, index: number) => React.ReactNode
  gap?: number
  className?: string
}

export function VirtualGrid<T>({
  items,
  itemHeight,
  containerHeight,
  columns,
  renderItem,
  gap = 16,
  className = "",
}: VirtualGridProps<T>) {
  const [scrollTop, setScrollTop] = React.useState(0)
  const scrollElementRef = React.useRef<HTMLDivElement>(null)

  const rowHeight = itemHeight + gap
  const totalRows = Math.ceil(items.length / columns)
  const totalHeight = totalRows * rowHeight

  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollTop / rowHeight)
    const end = Math.min(start + Math.ceil(containerHeight / rowHeight) + 2, totalRows - 1)

    return { start: Math.max(0, start), end }
  }, [scrollTop, rowHeight, containerHeight, totalRows])

  const visibleItems = useMemo(() => {
    const startIndex = visibleRange.start * columns
    const endIndex = Math.min((visibleRange.end + 1) * columns, items.length)

    return items.slice(startIndex, endIndex).map((item, index) => ({
      item,
      index: startIndex + index,
    }))
  }, [items, visibleRange, columns])

  const offsetY = visibleRange.start * rowHeight

  React.useEffect(() => {
    const scrollElement = scrollElementRef.current
    if (!scrollElement) return

    const handleScroll = () => {
      setScrollTop(scrollElement.scrollTop)
    }

    scrollElement.addEventListener("scroll", handleScroll, { passive: true })
    return () => scrollElement.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={scrollElementRef} className={`overflow-auto ${className}`} style={{ height: containerHeight }}>
      <div style={{ height: totalHeight, position: "relative" }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
          }}
        >
          {visibleItems.map(({ item, index }) => (
            <div key={index} style={{ height: itemHeight }}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
