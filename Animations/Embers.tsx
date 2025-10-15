"use client"

import React from "react"

type EmbersProps = {
  count?: number
};

const random = (min: number, max: number) => Math.random() * (max - min) + min

const Embers = React.memo(function Embers({ count = 20 }: EmbersProps) {
  const emberStyles = Array.from({ length: count }).map(() => {
    const size = random(6, 10)
    const fallDistance = random(800, 1200)
    const drift = random(-20, 20)

    return {
      width: `${size}px`,
      height: `${size}px`,
      left: `${random(0, 100)}%`,
      animationDuration: `${random(15, 30)}s`,
      animationDelay: `${random(0, 15)}s`,
      '--fall-distance': `${fallDistance}px`,
      '--drift-x': `${drift}px`,
    } as React.CSSProperties
  })

  return (
    <div className="relative w-full h-full pointer-events-none -z-10">
      {emberStyles.map((style, i) => (
        <div key={i} className="ember absolute" style={style} />
      ))}
    </div>
  )
})

export default Embers;