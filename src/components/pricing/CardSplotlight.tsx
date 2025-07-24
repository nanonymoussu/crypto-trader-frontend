'use client'

import { useRef, useState, type MouseEvent, type ReactNode } from 'react'

interface CardSplotlightProps {
  children: ReactNode
  className?: string
}

export const CardSplotlight = ({
  children,
  className = '',
}: CardSplotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [opacity, setOpacity] = useState<number>(0)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  return (
    <>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleFocus}
        onMouseLeave={handleBlur}
        className={`
          relative overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950
          ${className}
        `}
      >
        <div
          className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
          style={
            isFocused
              ? {
                  opacity,
                  background: `
                    radial-gradient(
                      600px circle at ${position.x}px ${position.y}px,
                      rgba(255, 255, 255, 0.06),
                      transparent 40%
                    )
                  `,
                }
              : {}
          }
        />
        {children}
      </div>
    </>
  )
}
