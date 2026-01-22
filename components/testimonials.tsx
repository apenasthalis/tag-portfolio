"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO",
    company: "TechStart",
    content:
      "O trabalho da Tag Programming superou todas as expectativas. Nosso site ficou incrível e as conversões aumentaram em 150% no primeiro mês. Profissionalismo e qualidade em cada detalhe.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    role: "Diretor de Marketing",
    company: "Nexus Digital",
    content:
      "Contratei para desenvolver nossa plataforma de e-commerce e o resultado foi excepcional. Comunicação clara, entregas no prazo e código de altíssima qualidade. Recomendo fortemente!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Oliveira",
    role: "Fundadora",
    company: "Studio Criativo",
    content:
      "Transformou nossa ideia em realidade com maestria. O dashboard que desenvolveram é intuitivo, rápido e nossos clientes adoraram. Parceria de longo prazo garantida.",
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "CTO",
    company: "InnovateTech",
    content:
      "Excelente desenvolvedor! Entregou um sistema complexo de agendamentos que funciona perfeitamente. Sempre disponível para ajustes e melhorias. Profissional nota 10.",
    rating: 5,
  },
  {
    id: 5,
    name: "Fernanda Costa",
    role: "Gerente de Produto",
    company: "DigitalFlow",
    content:
      "A landing page desenvolvida pela Tag Programming teve taxa de conversão 3x maior que a anterior. Design moderno, performance impecável e SEO otimizado. Melhor investimento!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="recomendacoes" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que <span className="text-primary">Dizem</span> os Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback real de clientes que confiaram na Tag Programming para seus projetos.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials
            .filter((_, i) => i !== currentIndex)
            .slice(0, 3)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card/50 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  "{testimonial.content}"
                </p>
                <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
