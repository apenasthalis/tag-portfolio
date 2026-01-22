"use client"

import Image from "next/image"
import { Code2, Layers, Zap, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Disponível para novos projetos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Sites de{" "}
              <span className="text-primary">Alta Performance</span>{" "}
              para seu Negócio
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Desenvolvimento web profissional com foco em resultados. 
              Transforme sua presença digital com soluções personalizadas e código otimizado.
            </p>
            
            
          </div>

          {/* Right Content - Orbital Animation */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-primary/20 animate-pulse-ring" />
            
            {/* Middle ring */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/30" />
            
            {/* Inner ring */}
            <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-primary/40" />

            {/* Orbiting icons */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96">
              <div className="animate-orbit absolute inset-0 flex items-center justify-center">
                <div className="absolute bg-card border border-primary/50 rounded-xl p-3 shadow-lg shadow-primary/20">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            <div className="absolute w-64 h-64 md:w-80 md:h-80">
              <div className="animate-orbit-reverse absolute inset-0 flex items-center justify-center">
                <div className="absolute bg-card border border-border rounded-xl p-3 shadow-lg">
                  <Layers className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="absolute w-80 h-80 md:w-96 md:h-96" style={{ animationDelay: "-5s" }}>
              <div className="animate-orbit absolute inset-0 flex items-center justify-center" style={{ animationDelay: "-10s" }}>
                <div className="absolute bg-card border border-border rounded-xl p-3 shadow-lg">
                  <Zap className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="absolute w-64 h-64 md:w-80 md:h-80" style={{ animationDelay: "-7s" }}>
              <div className="animate-orbit-reverse absolute inset-0 flex items-center justify-center" style={{ animationDelay: "-7s" }}>
                <div className="absolute bg-card border border-border rounded-xl p-3 shadow-lg">
                  <Globe className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Center Profile Image */}
            <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
              <Image
                src="/images/profile.png"
                alt="Tag Programming"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
