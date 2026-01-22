"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO",
    company: "Smart Devs",
    content:
      "Trabalho excepcional! O TAG entregou nosso projeto antes do prazo e superou todas as expectativas. A qualidade do código e atenção aos detalhes são impressionantes.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rodrigo Almeida",
    role: "Dono da hambúrgueria",
    company: "rodrigo burguer",
    content:
      "Profissional extremamente competente e comunicativo. Transformou nossa visão em uma plataforma robusta e escalável. Recomendo sem hesitação!",
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
    name: "Ricardo Santos",
    role: "CEO",
    company: "LevelCars",
    content:
      "Experiência técnica de alto nível combinada com excelente comunicação. O sistema desenvolvido está rodando perfeitamente há meses sem nenhum problema.",
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
    <section id="recomendacoes" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-foreground text-3xl md:text-4xl">
            O que <span className="text-primary">Dizem</span> os Clientes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Feedback real de clientes que confiaram na Tag Programming para seus projetos.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mx-auto max-w-4xl">
          <div className="relative bg-card p-8 md:p-12 border border-border rounded-3xl">
            <Quote className="top-6 left-6 absolute w-12 h-12 text-primary/20" />

            <div className="z-10 relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="fill-primary w-5 h-5 text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mb-8 text-foreground text-lg md:text-xl leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-primary/20 rounded-full w-14 h-14">
                  <span className="font-bold text-primary text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex justify-center items-center bg-card border border-border hover:border-primary rounded-full w-10 h-10 hover:text-primary transition-colors"
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
              className="flex justify-center items-center bg-card border border-border hover:border-primary rounded-full w-10 h-10 hover:text-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="hidden gap-6 lg:grid grid-cols-3 mt-16">
          {testimonials
            .filter((_, i) => i !== currentIndex)
            .slice(0, 3)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card/50 p-6 border border-border hover:border-primary/30 rounded-2xl transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-primary w-4 h-4 text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground text-sm line-clamp-3">
                  "{testimonial.content}"
                </p>
                <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-xs">{testimonial.company}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
