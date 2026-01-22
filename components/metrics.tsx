"use client"

import React from "react"

import { useEffect, useState, useRef } from "react"
import { Users, Briefcase, Clock, Award } from "lucide-react"

interface MetricProps {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  delay: number
}

function AnimatedMetric({ icon, value, suffix, label, delay }: MetricProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, value, delay])

  return (
    <div
      ref={ref}
      className="group relative bg-card p-6 md:p-8 border border-border hover:border-primary/50 rounded-2xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative space-y-4">
        <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12 text-primary">
          {icon}
        </div>
        
        <div>
          <div className="font-bold text-foreground text-4xl md:text-5xl">
            {count}
            <span className="text-primary">{suffix}</span>
          </div>
          <p className="mt-2 text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  )
}

export function Metrics() {
  const metrics = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: 50,
      suffix: "+",
      label: "Projetos Entregues",
      delay: 0,
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: 40,
      suffix: "+",
      label: "Clientes Satisfeitos",
      delay: 100,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 4,
      suffix: "+",
      label: "Anos de Experiência",
      delay: 200,
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: 100,
      suffix: "%",
      label: "Taxa de Satisfação",
      delay: 300,
    },
  ]

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-foreground text-3xl md:text-4xl">
            Resultados que <span className="text-primary">Importam</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Números que refletem nosso compromisso com a excelência e satisfação dos clientes.
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <AnimatedMetric key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  )
}
