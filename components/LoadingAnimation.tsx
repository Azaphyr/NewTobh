"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Ember particle component
const Ember = ({ delay = 0, size = 6, duration = 3, xOffset = 0 }) => (
  <motion.div
    className="absolute rounded-full bg-golden-amber/70 blur-[1px]"
    style={{
      width: size,
      height: size,
      boxShadow: `0 0 ${size / 2}px ${size / 3}px rgba(176, 104, 33, 0.6)`,
    }}
    initial={{
      x: xOffset,
      y: 50,
      opacity: 0,
    }}
    animate={{
      y: -100,
      x: xOffset + (Math.random() * 40 - 20),
      opacity: [0, 0.8, 0],
      scale: [0.8, 1.2, 0.5],
    }}
    transition={{
      duration: duration,
      repeat: Number.POSITIVE_INFINITY,
      delay: delay,
      ease: "easeOut",
    }}
  />
)

// Decorative rune component
const Rune = ({ rotation = 0, scale = 1, x = 0, y = 0, delay = 0 }) => (
  <motion.div
    className="absolute w-16 h-16 border-2 border-brick-red/30"
    style={{
      transform: `rotate(${rotation}deg) scale(${scale})`,
      x,
      y,
    }}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.7, 0.3, 0.7, 0],
      rotate: [rotation, rotation + 5, rotation - 5, rotation],
    }}
    transition={{
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  />
)

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Generate ember configs only on the client
  const emberConfigs = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        delay: i * 0.2,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 2 + 2,
        xOffset: (i - 6) * 6,
      })),
    []
  )

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Canvas background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const circles: Array<{
      x: number
      y: number
      radius: number
      color: string
      alpha: number
      direction: number
      speed: number
    }> = []

    // Create initial circles
    for (let i = 0; i < 15; i++) {
      const radius = Math.random() * 100 + 50
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: i % 3 === 0 ? "#9e2c21" : i % 3 === 1 ? "#B06821" : "#305853",
        alpha: Math.random() * 0.07 + 0.03,
        direction: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.2 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw each circle
      circles.forEach((circle) => {
        // Move circle
        circle.x += Math.cos(circle.direction) * circle.speed
        circle.y += Math.sin(circle.direction) * circle.speed

        // Bounce off edges
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius

        // Draw circle
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${circle.color}${Math.floor(circle.alpha * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gradient-to-b from-[#3a1512] via-[#2a1815] to-[#1e1a19] z-[-1]"
      />

      {/* Decorative runes */}
      <div className="absolute inset-0 z-[-1] opacity-70">
        <Rune rotation={45} scale={1.2} x={-100} y={-150} delay={0.5} />
        <Rune rotation={0} scale={1} x={150} y={-100} delay={1.2} />
        <Rune rotation={22.5} scale={0.8} x={-180} y={100} delay={0.8} />
        <Rune rotation={-30} scale={1.5} x={200} y={150} delay={0.2} />
      </div>

      {/* Logo with enhanced animation */}
      <motion.div
        className="mb-8 relative"
        initial={{ scale: 0.8, y: 20 }}
        animate={{
          scale: 1,
          y: 0,
          filter: [
            "drop-shadow(0 0 8px rgba(158, 44, 33, 0.3))",
            "drop-shadow(0 0 12px rgba(158, 44, 33, 0.6))",
            "drop-shadow(0 0 8px rgba(158, 44, 33, 0.3))",
          ],
        }}
        transition={{
          duration: 2,
          filter: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
          },
        }}
      >
        <Image
          src="/fullLogoRed.png"
          alt="Tales of Bruss' Hell"
          width={220}
          height={90}
          priority
          className="relative z-10"
        />

        {/* Ember particles around logo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-10 z-0">
          {emberConfigs.map((config, i) => (
            <Ember key={i} {...config} />
          ))}
        </div>
      </motion.div>

      {/* Progress bar with enhanced effects */}
      <div className="relative w-72 h-5 mb-8 overflow-hidden rounded-full bg-[#1a0a09]/40 backdrop-blur-sm border border-brick-red/20">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-brick-red via-golden-amber to-brick-red"
          style={{
            backgroundSize: "200% 100%",
          }}
          initial={{ width: 0 }}
          animate={{
            width: `${progress}%`,
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            width: { ease: "easeInOut" },
            backgroundPosition: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "linear",
            },
          }}
        />

        {/* Glowing edge on progress bar */}
        <motion.div
          className="absolute top-0 right-0 w-4 h-full bg-white/30 blur-sm"
          style={{ x: `${progress}%` }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Loading indicators with enhanced animation */}
      <div className="relative mb-8">
        <div className="flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 rounded-full bg-golden-amber"
              style={{
                boxShadow: "0 0 10px 2px rgba(176, 104, 33, 0.6)",
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Pulsing glow effect */}
        <motion.div
          className="absolute -inset-10 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-brick-red/20 blur-xl" />
        </motion.div>
      </div>

      {/* Loading text with enhanced animation */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.p
          className="text-xl font-medieval text-golden-amber"
          animate={{
            opacity: [0.7, 1, 0.7],
            textShadow: [
              "0 0 4px rgba(176, 104, 33, 0.5)",
              "0 0 8px rgba(176, 104, 33, 0.8)",
              "0 0 4px rgba(176, 104, 33, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Embarking on your adventure...
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-golden-amber/50 to-transparent mt-2"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            width: ["80%", "100%", "80%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  )
}
