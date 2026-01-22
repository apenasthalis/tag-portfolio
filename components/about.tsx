"use client"

import Image from "next/image"
import { Code2, Rocket, Shield, Sparkles } from "lucide-react"

const skills = [
  "React / Next.js",
  "PHP",
  "Laravel",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Cursor, Gemini, Claude",
]

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Código Limpo",
    description: "Código bem estruturado, documentado e seguindo as melhores práticas do mercado.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Alta Performance",
    description: "Sites otimizados para velocidade, garantindo a melhor experiência para seus usuários.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança",
    description: "Implementação de práticas de segurança para proteger seus dados e aplicações.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Design Moderno",
    description: "Interfaces elegantes e responsivas que encantam e convertem visitantes em clientes.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="items-center gap-12 lg:gap-20 grid lg:grid-cols-2">
          {/* Left - Image and Skills */}
          <div className="relative">
            <div className="relative mx-auto max-w-md aspect-[4/5]">
              {/* Decorative elements */}
              <div className="-top-4 -left-4 absolute border-primary/50 border-t-4 border-l-4 rounded-tl-3xl w-24 h-24" />
              <div className="-right-4 -bottom-4 absolute border-primary/50 border-r-4 border-b-4 rounded-br-3xl w-24 h-24" />

              {/* Main Image */}
              <div className="relative border border-border rounded-2xl h-full overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Tag Programming Developer"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Floating Skills Card */}
              <div className="-right-4 md:-right-8 bottom-12 absolute bg-card shadow-xl p-4 border border-border rounded-xl animate-float">
                <div className="mb-2 text-muted-foreground text-xs">Tecnologias</div>
                <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                  {skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 px-2 py-1 rounded text-primary text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="font-medium text-primary">Sobre</span>
              <h2 className="mt-2 mb-6 font-bold text-foreground text-3xl md:text-4xl">
                Desenvolvedor Web focado em{" "}
                <span className="text-primary">Resultados</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Meu nome é <span className="font-medium text-foreground">Thalis Gabriel</span>, 
                  desenvolvedor web com mais de 4 anos de experiência criando soluções
                  digitais que geram resultados reais para negócios de todos os tamanhos.
                </p>
                <p>
                  Minha abordagem combina código de alta qualidade com design estratégico,
                  sempre pensando na performance, usabilidade e conversão. Cada projeto é
                  tratado como único, com soluções personalizadas para atender às necessidades
                  específicas de cada cliente.
                </p>
                <p>
                  Trabalho com as tecnologias mais modernas do mercado, garantindo que seu
                  projeto esteja preparado para escalar e evoluir junto com seu negócio.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="mb-4 font-semibold text-foreground text-lg">Stack Principal</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary px-3 py-1.5 rounded-lg font-medium text-secondary-foreground text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-6 border border-border hover:border-primary/50 rounded-2xl transition-all duration-300"
            >
              <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary mb-4 rounded-xl w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-semibold text-foreground text-lg">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
